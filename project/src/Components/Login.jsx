import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#910E91] to-[#2D5597]">
      <div className="bg-[rgba(207,189,203,0.75)] p-8 rounded-tl-[50px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[50px] shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#00264D]">SpiritX Login</h2>
        <form>
          <div className="mb-4 flex items-center bg-white rounded-lg p-2 shadow-md">
            <span className="text-gray-600 mx-2">👤</span>
            <input
              type="text"
              className="w-full outline-none bg-transparent px-2 py-2 text-gray-700"
              placeholder="DOMinators"
            />
          </div>
          <div className="mb-4 flex items-center bg-white rounded-lg p-2 shadow-md">
            <span className="text-gray-600 mx-2">🔒</span>
            <input
              type="password"
              className="w-full outline-none bg-transparent px-2 py-2 text-gray-700"
              placeholder="Str0ng@p4ssWord"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E3F7F] text-white py-2 rounded-lg hover:bg-[#00264D] transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-[#1E3F7F] mt-4">
          Don't have an account?{" "}
          <a href="/Signup.jsx" className="text-[#00264D] font-semibold hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
