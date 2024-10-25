import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password.trim(), user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        // Create and return token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Error occurred during login" });
    }
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Enter a valid email ID" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create and save new user
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();

        // Create and return token
        const token = createToken(newUser._id);
        res.json({ success: true, token });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ success: false, message: "Error occurred during registration" });
    }
};

export { loginUser, registerUser };
