import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import loginSVG from "../assets/images/loginani.svg"; // ✅ Same SVG like Signup

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Login = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black flex items-center justify-center px-4"
    >
      <motion.div
        className="flex flex-col md:flex-row max-w-5xl w-full rounded-lg overflow-hidden shadow-[0_0_5px_#00ff88] border border-green-500/20 backdrop-blur-xl mt-32 mb-13 md:mt-38"
        variants={fadeUp}
        custom={0}
      >
     {/* Left – SVG + “don't have an account? signup now” */}
 <motion.div
          className="md:w-1/2 w-full p-10 bg-gradient-to-br from-green-400 to-green-600 text-white flex flex-col items-center justify-center"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={loginSVG}
            alt="Signup Illustration"
            className="w-48 sm:w-60 md:w-90  h-auto max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* “don't have an account? Login” below the SVG */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="mt-4 text-center"
          >
            <span className=" text-white">Don't have an account? </span>
            <Link
              to="/signup"
              className="underline decoration-black text-black font-semibold"
            >
              Signup
            </Link>
          </motion.div>
        </motion.div>


        {/* Left – Login Form */}
        <div className="md:w-1/2 w-full p-7 bg-black/30 backdrop-blur-xl">
          <motion.h2
            className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text"
            variants={fadeUp}
            custom={1}
          >
            Login Account
          </motion.h2>

          <motion.form className="space-y-6">
            {/* Email */}
            <motion.div variants={fadeUp} custom={2}>
              <label className="block text-sm mb-1 text-yellow-400">Email</label>
              <motion.input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-yellow-400 text-yellow-300 placeholder-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={fadeUp} custom={3}>
              <label className="block text-sm mb-1 text-yellow-400">Password</label>
              <motion.input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-yellow-400 text-yellow-300 placeholder-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>

            {/* Remember & Forgot */}
            <motion.div
              className="flex items-center justify-between text-sm text-yellow-300"
              variants={fadeUp}
              custom={4}
            >
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-400" />
                Remember Me
              </label>
              <a href="#" className="hover:text-yellow-200">
                Forgot Password?
              </a>
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              variants={fadeUp}
              custom={5}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #facc15" }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-lg shadow-md transition-all"
            >
              Login
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
