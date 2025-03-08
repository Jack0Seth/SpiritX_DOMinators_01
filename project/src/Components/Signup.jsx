import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Signup = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Successful", formData);
    handleSignup();  // Calling the signup API
    onNavigate("welcome"); // Navigate to Welcome page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#910E91] to-[#2D5597]">
      <div className="bg-[#CFBDCB]/80 p-8 rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] shadow-2xl w-96 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-[#00264D] mb-6">
          SpiritX SignUp
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password   eg: 5tr0ng@p4ssWord"
              className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
              required
            />
          </div>
          <div className="relative">
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
