import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import signupSVG from "../assets/images/signupani.svg"; // ✅ Your SVG file

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Signup = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-black via-green-950 to-black flex items-center justify-center px-4"
    >
      <motion.div
        className="flex flex-col md:flex-row max-w-5xl w-full rounded-lg overflow-hidden shadow-[0_0_5px_#00ff88] border border-green-500/20 backdrop-blur-xl mt-32 md:mt-40"
        variants={fadeUp}
        custom={0}
      >
        {/* Right – Sign Up Form */}
        <div className="md:w-1/2 w-full p-7 bg-black/30 backdrop-blur-xl text-white">
          <motion.h2
            className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-green-400 to-yellow-500  text-transparent bg-clip-text"
            variants={fadeUp}
            custom={1}
          >
            Create Account
          </motion.h2>

          <motion.form className="space-y-6">
            {/* Name */}
            <motion.div variants={fadeUp} custom={1}>
              <label className="block text-sm mb-1 text-yellow-400">Name</label>
              <motion.input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-yellow-400 text-yellow-300 placeholder-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>

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

            {/* Confirm Password */}
            <motion.div variants={fadeUp} custom={4}>
              <label className="block text-sm mb-1 text-yellow-400">Confirm Password</label>
              <motion.input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-black/50 border border-yellow-400 text-yellow-300 placeholder-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              type="submit"
              variants={fadeUp}
              custom={5}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px #facc15",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-lg shadow-md transition-all"
            >
              Register
            </motion.button>
          </motion.form>
        </div>

        {/* Left – SVG + “Have an account? Login” */}
        <motion.div
          className="md:w-1/2 w-full p-10 bg-gradient-to-br from-green-400 to-green-600 text-white flex flex-col items-center justify-center"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={signupSVG}
            alt="Signup Illustration"
            className="w-48  h-auto sm:w-60 md:w-90 max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* “Have an account? Login” below the SVG */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="mt-4 text-center"
          >
            <span className=" text-white">Have an account? </span>
            <Link
              to="/login"
              className="underline decoration-black text-black font-semibold"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
