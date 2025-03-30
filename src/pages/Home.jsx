import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PrincipalPreview from "../components/PrincipalPreview"; // ✅ Import kiya

import bgImage1 from "../assets/images/1.jpg";
import bgImage2 from "../assets/images/2.jpeg";
import bgImage3 from "../assets/images/3.jpg";
import bgImage4 from "../assets/images/4.jpeg";
import bgImage5 from "../assets/images/5.jpeg";
import WhyChoose from "../components/WhyChoose";
import AcademicExcellence from "../components/AcademicExcellence";
import InfrastructureDevelopment from "../components/InfrastructureDevelopment";
import MissionAndVision from "../components/MissionAndVision";

const images = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5];
const textArray = [
  "Welcome to Federal Government School",
  " Our Motto is 'Learn to Lead'",
  "Quality Education for Every Student",
  "Building a Brighter Future Together",
  "Committed to Excellence in Learning",
];
const paraArray = [
  "Providing high-quality education under government supervision.",
  "We believe that true leadership begins with knowledge and determination.",
  "Encouraging discipline, creativity, and leadership.",
  "Our mission is to shape responsible citizens for tomorrow.",
  "Ensuring equal learning opportunities for all students."
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ✅ Carousel Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-green-900/40 z-10"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute w-full h-full flex flex-col items-center justify-center text-center text-white"
            style={{ backgroundImage: `url(${images[index]})`, backgroundSize: "cover", backgroundPosition: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold relative z-20 drop-shadow-lg"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {textArray[index]}
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl max-w-2xl relative z-20 text-yellow-300"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {paraArray[index]}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green/50 p-2 rounded-full text-white z-30"
          onClick={prevSlide}
        >
          <FaArrowLeft size={17} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green/50 p-2 rounded-full text-white z-30"
          onClick={nextSlide}
        >
          <FaArrowRight size={17} />
        </button>
      </div>

  
      <PrincipalPreview />

      <WhyChoose/>
  
      <AcademicExcellence/>

      <MissionAndVision/>
      
      <InfrastructureDevelopment/>
    </>
  );
};

export default Home;
