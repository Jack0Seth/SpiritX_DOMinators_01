import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Signup = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return regex.test(password);
  };

  const validateUsername = async (username) => {
    if (username.length < 8) {
      setErrors((prev) => ({ ...prev, username: "Username must be at least 8 characters long." }));
      return false;
    }
  
    try {
      const response = await fetch("http://localhost:5000/check-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
  
      const data = await response.json();
      console.log("Username Check Response:", data); // <-- Debugging Log
  
      if (!data.available) {
        setErrors((prev) => ({ ...prev, username: "Username is already taken." }));
        return false;
      }
  
      setErrors((prev) => ({ ...prev, username: "" }));
      return true;
    } catch (error) {
      console.error("Error checking username:", error);
      return false;
    }
  };
  

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (name === "username") {
      // Check if username is at least 8 characters long before proceeding with asynchronous validation
      if (value.length < 8) {
        setErrors((prev) => ({
          ...prev,
          username: "Username must be at least 8 characters long.",
        }));
        return;
      } else {
        setErrors((prev) => ({ ...prev, username: "" }));
      }
  
      // Check username availability in the database
      await validateUsername(value);
    }
  
    if (name === "password") {
      if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must contain at least 1 uppercase, 1 lowercase, and 1 special character. Minimum 8 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  
    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match!" }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }
  };
  
  const handleSignup = async () => {
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });
  
    const data = await response.json();
    alert(data.message);

    if (data.message === "User registered successfully!") {
      sessionStorage.clear();
      
      setTimeout(() => {
        onNavigate("login");
      },2000);
      //onNavigate("login"); // Navigate to the login page if signup is successful
    } else {
      console.log("Error: ", data.message);
    }
    
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if there are errors in any fields before submitting
    if (errors.username || errors.password || errors.confirmPassword) {
      alert("Please fix errors before submitting.");
      return;
    }
  
    const isUsernameValid = await validateUsername(formData.username);
    if (!isUsernameValid) return;
  
    console.log("Signup Successful", formData);
    handleSignup(); // Call signup API
    
    setTimeout(() => {
      onNavigate("login");
    },2000);
    //onNavigate("login"); // Navigate to login page
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#910E91] to-[#2D5597]">
      <div className="bg-[#CFBDCB]/80 p-8 rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] shadow-2xl w-96 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-[#00264D] mb-6">
          SpiritX SignUp
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex flex-col">
            <div className="relative flex items-center">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username (Min 8 chars)"
                className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597] border border-[#00264D]"
                required
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="relative flex flex-col">
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password (e.g., 5tr0ng@P4ss)"
                className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
                required
              />
            </div>
            
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="relative flex flex-col">
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
                required
              />
            </div>
            
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E3F7F] text-white py-2 hover:bg-[#00264D] transition duration-200"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-[#1E3F7F] mt-2">
            Already have an account?{" "}
            <button
              onClick={() => onNavigate("login")}
              className="text-[#00264D] font-bold hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
