import React from "react";
import { useNavigate } from "react-router-dom";
import bgSchool from "../assets/images/prinmess.jpg";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

// Academic Card Component
const AcademicProgram = ({ title, description, features, icon }) => (
  <div
    className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 border-l-4 border-yellow-400"
    data-aos="zoom-in"
  >
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-tr from-green-600 to-lime-400 text-white rounded-full flex items-center justify-center shadow-lg text-xl animate-pulse">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-3">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-sm text-gray-700"
        >
          <span className="text-green-600">✓</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Subject List Card Component
const SubjectSection = ({ title, subjects }) => (
  <div
    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl"
    data-aos="fade-up"
  >
    <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-transparent bg-clip-text mb-4">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {subjects.map((subject, i) => (
        <div
          key={i}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-3 py-2 text-white text-sm text-center shadow-md hover:scale-105 transform transition duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 shimmer opacity-10 animate-pulse pointer-events-none" />
          {subject}
        </div>
      ))}
    </div>
  </div>
);

// Main Component
const Academics = () => {
  const navigate = useNavigate();

  const academicPrograms = [
    {
      title: "Primary Section (Grade 1-5)",
      description:
        "Foundation years focusing on basic skills and conceptual understanding.",
      features: [
        "English medium instruction with Urdu as second language",
        "Focus on numeracy and literacy skills",
        "Activity-based learning approach",
        "Regular parent-teacher meetings",
        "Continuous assessment system",
      ],
      icon: <FaBookOpen />,
    },
    {
      title: "Middle Section (Grade 6-8)",
      description:
        "Transitional phase preparing students for secondary education.",
      features: [
        "Introduction to specialized subjects",
        "Project-based learning",
        "Science lab activities",
        "Computer literacy programs",
        "Sports and physical education",
      ],
      icon: <FaLaptopCode />,
    },
    {
      title: "Secondary Section (Grade 9-10)",
      description:
        "Preparation for board examinations and higher education.",
      features: [
        "Board-aligned curriculum",
        "Specialized subject teachers",
        "Regular mock examinations",
        "Career counseling sessions",
        "Extra classes for weak students",
      ],
      icon: <FaChalkboardTeacher />,
    },
  ];

  const coreSubjects = [
    "English",
    "Urdu",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Pakistan Studies",
    "Islamic Studies",
  ];

  const additionalActivities = [
    "Science Projects",
    "Math Olympiad",
    "English Language Club",
    "Urdu Literary Society",
    "IT Club",
    "Sports Activities",
  ];

  const teachingPoints = [
    "Interactive learning environment",
    "Project-based learning approach",
    "Regular assessments and feedback",
    "Integration of technology in teaching",
  ];

  const supportPoints = [
    "Remedial classes for weak students",
    "Individual attention and guidance",
    "Parent-teacher collaboration",
    "Regular progress monitoring",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-white overflow-x-hidden">
      {/* Header */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${bgSchool})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">
            Academic Excellence
          </h1>
          <p className="text-sm md:text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt; Academics</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-14">
        {/* Intro */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-lime-500 to-yellow-500 bg-clip-text text-transparent mb-6">
            Nurturing Academic Growth
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            At FG Piffers, we provide a comprehensive education system that
            focuses on academic excellence, character building, and all-round
            development. Our curriculum is designed to meet national standards
            while incorporating modern teaching methodologies.
          </p>
        </div>

        {/* Academic Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {academicPrograms.map((program, i) => (
            <AcademicProgram key={i} {...program} />
          ))}
        </div>

        {/* Curriculum */}
        <div className="bg-gradient-to-br from-green-800 via-green-900 to-green-800 rounded-3xl p-6 md:p-10 mb-20 border border-green-700 shadow-inner">
          <h2
            className="text-2xl md:text-3xl font-bold text-center text-yellow-300 mb-10"
            data-aos="fade-up"
          >
            Our Curriculum
          </h2>
          <div className="space-y-8">
            <SubjectSection title="Core Subjects" subjects={coreSubjects} />
            <SubjectSection
              title="Additional Activities"
              subjects={additionalActivities}
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[["Teaching Methodology", teachingPoints], ["Academic Support", supportPoints]].map(
            ([title, points], i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-400 hover:shadow-xl transition-all"
                data-aos={i === 0 ? "fade-right" : "fade-left"}
              >
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {title}
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  {points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaLightbulb className="text-yellow-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Academics;
