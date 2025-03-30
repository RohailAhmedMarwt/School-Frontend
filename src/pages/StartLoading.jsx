import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo1.jpeg"; // Make sure path is correct

const StartLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="relative w-14 h-14">
        {/* Outer rotating border */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-4 border-green-900 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Logo in center rotating opposite */}
        <motion.img
          src={logo}
          alt="Logo"
          className="absolute w-8 h-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default StartLoading;
