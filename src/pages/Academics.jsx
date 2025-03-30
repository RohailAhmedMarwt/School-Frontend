import React from "react";
import { useNavigate } from "react-router-dom";
import bgSchool from "../assets/images/3.jpg";

// Academic Card Component
const AcademicProgram = ({ title, description, features }) => (
  <div className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition duration-300" data-aos="fade-up">
    <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-2">{title}</h3>
    <p className="text-sm md:text-base text-gray-600 mb-3">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start space-x-2 text-sm md:text-base">
          <span className="text-green-600 mt-1">•</span>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

// Subject List Card Component
const SubjectSection = ({ title, subjects }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6" data-aos="fade-up">
    <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {subjects.map((subject, i) => (
        <div key={i} className="bg-white/20 rounded-lg p-2 text-sm md:text-base text-white/90 text-center">
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
      description: "Foundation years focusing on basic skills and conceptual understanding.",
      features: [
        "English medium instruction with Urdu as second language",
        "Focus on numeracy and literacy skills",
        "Activity-based learning approach",
        "Regular parent-teacher meetings",
        "Continuous assessment system"
      ]
    },
    {
      title: "Middle Section (Grade 6-8)",
      description: "Transitional phase preparing students for secondary education.",
      features: [
        "Introduction to specialized subjects",
        "Project-based learning",
        "Science lab activities",
        "Computer literacy programs",
        "Sports and physical education"
      ]
    },
    {
      title: "Secondary Section (Grade 9-10)",
      description: "Preparation for board examinations and higher education.",
      features: [
        "Board-aligned curriculum",
        "Specialized subject teachers",
        "Regular mock examinations",
        "Career counseling sessions",
        "Extra classes for weak students"
      ]
    }
  ];

  const coreSubjects = [
    "English", "Urdu", "Mathematics", "Physics", "Chemistry",
    "Biology", "Computer Science", "Pakistan Studies", "Islamic Studies"
  ];

  const additionalActivities = [
    "Science Projects", "Math Olympiad", "English Language Club",
    "Urdu Literary Society", "IT Club", "Sports Activities"
  ];

  const teachingPoints = [
    "Interactive learning environment",
    "Project-based learning approach",
    "Regular assessments and feedback",
    "Integration of technology in teaching"
  ];

  const supportPoints = [
    "Remedial classes for weak students",
    "Individual attention and guidance",
    "Parent-teacher collaboration",
    "Regular progress monitoring"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <div
        className="relative  mt-20 md:mt-33 w-full h-[300px] bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: `url(${bgSchool})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Academic Excellence</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="text-white"> &gt; Academics</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">Nurturing Academic Growth</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            At FG Piffers, we provide a comprehensive education system that focuses on academic excellence, 
            character building, and all-round development. Our curriculum is designed to meet national 
            standards while incorporating modern teaching methodologies.
          </p>
        </div>

        {/* Academic Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {academicPrograms.map((program, i) => (
            <AcademicProgram key={i} {...program} />
          ))}
        </div>

        {/* Curriculum */}
        <div className="bg-green-900 rounded-xl p-4 md:p-8 mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-center text-yellow-400 mb-8" data-aos="fade-up">
            Our Curriculum
          </h2>
          <div className="space-y-8">
            <SubjectSection title="Core Subjects" subjects={coreSubjects} />
            <SubjectSection title="Additional Activities" subjects={additionalActivities} />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[["Teaching Methodology", teachingPoints], ["Academic Support", supportPoints]].map(([title, points], i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-4 md:p-6" data-aos={i === 0 ? "fade-right" : "fade-left"}>
              <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-4">{title}</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
