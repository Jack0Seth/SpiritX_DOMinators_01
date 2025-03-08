import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-700 to-blue-600">
      <div className="bg-purple-300 p-8 rounded-3xl shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">SpiritX Login</h2>
        <form>
          <div className="mb-4 flex items-center bg-white rounded-lg p-2 shadow-md">
            <span className="text-gray-600 mx-2">👤</span>
            <input
              type="text"
              className="w-full outline-none bg-transparent px-2 py-2 text-gray-700"
              placeholder="John Doe"
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
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-800 mt-4">
          Don't have an account?{" "}
          <a href="/Signup" className="text-blue-900 font-semibold hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
