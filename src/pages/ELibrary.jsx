import React from "react";
import { useNavigate } from "react-router-dom";
import bgELibrary from "../assets/images/prinmess.jpg"; // apni image ka path yahan set karo

const ELibrary = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Header Section */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgELibrary})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>

        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            E-Library
          </h1>
          <p className="text-sm md:text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt; E-Library</span>
          </p>
        </div>
      </div>

      {/* E-Library content will go here */}
    </div>
  );
};

export default ELibrary;
