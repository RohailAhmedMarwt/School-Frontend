import React from "react";

const InternationalAchievements = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 overflow-x-hidden">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12"
        data-aos="fade-up"
      >
        🌍 International Achievements
      </h2>

      <div className="space-y-10">
        {/* Copernicus Olympiad */}
        <div
          className="bg-gray-50 border-l-4 border-green-800 shadow-sm p-6 rounded-md hover:shadow-md hover:border-green-600 transition duration-300"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            6th International Copernicus Mathematics Olympiad 2024
          </h3>
          <p className="text-gray-800">
            <span className="font-medium text-green-700">
              Muhammad Shayan
            </span>{" "}
            (Grade 4) secured{" "}
            <span className="font-bold text-gray-900">Honorable Mention</span>{" "}
            and qualified for the Global Finals in{" "}
            <span className="text-gray-900 font-semibold">
              New York (July 26–31, 2025)
            </span>
            .
          </p>
          <p className="mt-1 text-gray-700">
            <span className="font-medium text-green-700">Ahmad Shahzad</span>{" "}
            (Grade 2) received a{" "}
            <span className="text-gray-800 font-medium">
              Participation Certificate
            </span>
            .
          </p>
        </div>

        {/* IKSC */}
        <div
          className="bg-gray-50 border-l-4 border-green-800 shadow-sm p-6 rounded-md hover:shadow-md hover:border-green-600 transition duration-300"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            International Kangaroo Science Contest (IKSC)
          </h3>
          <p className="text-gray-800">
            Our students received{" "}
            <span className="font-bold text-gray-900">2 Star Medals</span>,{" "}
            <span className="font-bold text-gray-900">8 One Star Medals</span>, and{" "}
            <span className="text-gray-800 font-medium">
              14 Participation Awards
            </span>
            .
          </p>
        </div>

        {/* JEO */}
        <div
          className="bg-gray-50 border-l-4 border-green-800 shadow-sm p-6 rounded-md hover:shadow-md hover:border-green-600 transition duration-300"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            Junior English Olympiad (JEO)
          </h3>
          <p className="text-gray-800">
            Earned{" "}
            <span className="font-bold text-gray-900">1 Bronze Medal</span> and qualified
            for the Global Finals in{" "}
            <span className="text-gray-900 font-medium">
              Sydney, Australia
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternationalAchievements;
