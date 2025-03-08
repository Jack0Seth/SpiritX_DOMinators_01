import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#910E91] to-[#2D5597]">
      <div className="bg-[rgba(207,189,203,0.75)] p-8 rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#00264D]">
          SpiritX Login
        </h2>
        <form>
          <div className="mb-4 flex items-center bg-white p-2 shadow-md relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="text"
              className="w-full outline-none bg-transparent pl-10 py-2 text-gray-700"
              placeholder="DOMinators"
            />
          </div>
          <div className="mb-4 flex items-center bg-white p-2 shadow-md relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00264D]" />
            <input
              type="password"
              className="w-full outline-none bg-transparent pl-10 py-2 text-gray-700"
              placeholder="Str0ng@p4ssWord"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E3F7F] text-white py-2 hover:bg-[#00264D] transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-[#1E3F7F] mt-4">
          Don't have an account?{" "}
          <a href="/Signup" className="text-[#00264D] font-semibold hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
