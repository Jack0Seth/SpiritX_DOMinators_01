import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message); // Display error message
        return;
      }

      alert(data.message); // Success message (optional)
      
      // Store username in sessionStorage (or localStorage for persistence)
      sessionStorage.setItem('username', data.username);
      
      // Navigate to the Welcome page on successful login
      onNavigate("welcome");
    } catch (error) {
      setErrorMessage("An error occurred. Please try again."); // Handle network errors
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#910E91] to-[#2D5597]">
      <div className="bg-[rgba(207,189,203,0.75)] p-8 rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#00264D]">
          SpiritX Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 flex items-center bg-white shadow-md relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full outline-none bg-transparent pl-10 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4 flex items-center bg-white shadow-md relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full outline-none bg-transparent pl-10 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
              placeholder="Password"
              required
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm text-center mb-4">
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#1E3F7F] text-white py-2 hover:bg-[#00264D] transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-[#1E3F7F] mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => onNavigate("signup")}
            className="text-[#00264D] font-semibold hover:underline"
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
