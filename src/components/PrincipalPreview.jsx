import React from "react";
import principalImage from "../assets/images/principal2.jpeg";
import bgSchool from "../assets/images/4.jpeg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrincipalPreview = () => {
  return (
    <div className="relative bg-white py-19 px-4">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-13 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSchool})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        
        {/* Text Section */}
        <div className="md:w-1/2  w-full px-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 mb-4 leading-snug">
            Nurturing Future Leaders with <span className="text-green-800">Discipline</span> & Vision
          </h2>

          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            At FG Public School Piffers Abbottabad, we are proud to foster an educational environment built on a strong foundation of discipline, integrity, and academic excellence. Our goal is not only to teach students but to empower them — preparing them to meet the challenges of tomorrow as confident, capable, and ethical individuals. Through a diverse curriculum, a values-based approach, and committed faculty, we instill leadership qualities, critical thinking, and compassion in our students....
          </p>

          <p className="font-semibold text-gray-800 mb-1">
            Mr. Azhar Iqbal Malik – Principal
          </p>
          <p className="text-sm text-gray-600 mb-4">FG Public School Piffers Abbottabad</p>

          <div className="flex justify-center md:justify-start">
  <Link to="/principal-message">
    <button className="group  rounded-md relative bg-green-900 text-white text-sm md:text-base shadow-md hover:bg-green-700 transition duration-300 px-5 py-2 overflow-hidden min-w-[110px] h-[40px] flex items-center justify-center">
      
      {/* Read More Text */}
      <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-10px]">
        Read More
      </span>

      {/* Arrow */}
      <span className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[10px] text-xl">
        →
      </span>
    </button>
  </Link>
</div>
        </div>

        {/* Principal Image */}
        <div className="md:w-1/3   flex justify-center">
          <img
            src={principalImage}
            alt="Principal"
            className="shadow-xl rounded-md  w-[300px] md:w-[320px] object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default PrincipalPreview;
