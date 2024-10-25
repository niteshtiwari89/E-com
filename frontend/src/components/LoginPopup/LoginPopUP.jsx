import  { useState, useContext } from "react";
import "./LoginPopUP.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

export const LoginPopUP = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const { url, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    
    // Basic validation
    if (!data.email || !data.password || (currState === "Sign Up" && !data.name)) {
      alert("Please fill in all fields.");
      return;
    }

    const newUrl = currState === "Login" ? `${url}/api/data/login` : `${url}/api/data/register`;

    setLoading(true);
    setError(""); // Reset error message

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token); // Store token
        setShowLogin(false);
        setData({ name: "", email: "", password: "" }); // Reset form data
      } else {
        setError(response.data.message); // Set error message from server response
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        // Check if the error has a response from the server
        setError(error.response.data.message || "An error occurred. Please try again.");
      } else {
        setError("Network error. Please try again later.");
      }
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-input">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : (currState === "Sign Up" ? "Create Account" : "Login")}
        </button>
        {error && <p className="error-message">{error}</p>}
        <div className="login-popup-condition">
          <input type="checkbox"/>
          <p>By continuing, you agree to the terms and conditions.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};
