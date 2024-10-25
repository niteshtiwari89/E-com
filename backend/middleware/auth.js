import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Get token from Bearer token

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ success: false, message: "Token is expired or invalid" });
      }
      
      req.body.userId = decoded.id;
      next();
    });
}

export default authMiddleware;
