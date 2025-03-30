import React from "react";
import bgImg from "../assets/images/3.jpg"; // Replace with your background image

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Login Box */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md text-white border border-white/30 mb-20 md:mt-30">

        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-green-300 hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;