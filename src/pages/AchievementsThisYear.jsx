import React, { useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgSchool from "../assets/images/achievementstopimg.jpg";
import AcademicExcellence from "../components/AcademicExcellence";
import NationalAndInterAch from "../components/NationAndInternationalAch";
import InternationalAchievements from "../components/InternationalAchievements";
import InfrastructureDevelopment from "../components/InfrastructureDevelopment";


const AchievementsThisYear = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      {/* Top Banner */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgSchool})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>

        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Achievements this year
          </h1>
          <p className="text-sm md:text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt; Achievements This Year</span>
          </p>
        </div>
      </div>

      <AcademicExcellence/>


      {/* Section Divider */}
      <div className="w-full max-w-4xl mx-auto mt-6 border-t-2 border-dashed border-green-300"></div>


      <NationalAndInterAch/>
    
      <InternationalAchievements/>

      {/* Sports Achievements Section */}
      <section className="w-full bg-green-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-yellow-300 mb-6 text-center tracking-wide glow"
            data-aos="zoom-in"
          >
            🏆 Sports Achievements
          </h2>

          <p
            className="text-center text-green-100 max-w-2xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our students showed remarkable sportsmanship and physical excellence
            by dominating the regional sports scene.
          </p>

          {/* Sports Cards Grid */}
          <div
            className="grid md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Team Championships */}
            <div className="bg-green-800 border border-green-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                🏅Regional Team Champion
              </h3>
              <ul className="list-disc list-inside space-y-1 text-green-100">
                <li>⚽ Football</li>
                <li>🏀 Basketball</li>
                <li>🏐 Volleyball</li>
                <li>💪 Tug of War</li>
              </ul>
            </div>

            {/* Individual Athletics */}
            <div className="bg-green-800 border border-green-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                🏃‍♂️ Athletic Achievements
              </h3>
              <ul className="list-disc list-inside space-y-1 text-green-100">
                <li>🥇 1st Position in 400m Race</li>
                <li>🏅 Multiple wins in various track & field events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       <InfrastructureDevelopment/>
      
    </div>
  );
};

export default AchievementsThisYear;
