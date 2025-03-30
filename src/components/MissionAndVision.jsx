// src/components/MissionAndVision.jsx

import React from "react";
import mission from "../assets/images/mission1.png";
import vision from "../assets/images/vision1.png";

const MissionAndVision = () => {
  return (
    <section id="mission" className="bg-gray-100 px-8 py-14  text-center overflow-x-hidden">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-green-900 mb-12">
        Mission & Vision
      </h2>

      {/* Two Columns */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10">
        {/* Mission Block */}
        <div
          className="md:w-1/2 flex flex-col items-center px-4 bg-white rounded-xl shadow-md py-8 hover:shadow-lg transition duration-300"
          data-aos="fade-up"
        >
          <img
            src={mission}
            alt="Mission Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Mission</h3>
          <p className="text-sm text-gray-700 leading-7 px-2">
            To provide high-quality, affordable education that nurtures academic
            excellence, moral integrity, and social responsibility.
          </p>
        </div>

        {/* Vision Block */}
        <div
          className="md:w-1/2 flex flex-col items-center px-4 bg-white rounded-xl shadow-md py-8 hover:shadow-lg transition duration-300"
          data-aos="fade-up"
        >
          <img
            src={vision}
            alt="Vision Icon"
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Vision</h3>
          <p className="text-sm text-gray-700 leading-7 px-2">
            To become a leading Federal Government school known for innovation,
            inclusivity, and holistic student development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
