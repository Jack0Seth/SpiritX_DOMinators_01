import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Successful", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#910E91] to-[#2D5597]">
      <div className="bg-[#CFBDCB]/80 p-8 rounded-tr-[0px] rounded-2xl rounded-bl-[0px] shadow-2xl w-96 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-[#00264D] mb-6">
          SpiritX SignUp
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="UserName"
              className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
              required
            />
          </div>
          
          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 bg-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#2D5597]"
              required
            />
          </div>

          {/* Confirm Password Field */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1E3F7F] text-white py-2 hover:bg-[#00264D] transition duration-200"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-[#1E3F7F] mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-[#00264D] font-bold hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
