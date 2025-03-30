import React from "react";
import complab from "../assets/images/complab.jpg";
import stage from "../assets/images/stage.jpeg";
import rc from "../assets/images/rc.jpg";
import filter from "../assets/images/filter.jpg";
import solor from "../assets/images/solor.jpg";
import mosque from "../assets/images/mosque.jpg";

const InfrastructureDevelopment = () => {
  return (
    <section className="bg-green-900  text-white py-12 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400" data-aos="fade-up">
          Infrastructure Development
        </h2>

        <div className="space-y-16">
          {/* Computer Lab */}
          <div className="md:flex md:items-center md:space-x-10" data-aos="fade-right">
            <img src={complab} alt="Computer Lab" className="w-full md:w-1/2 rounded-xl shadow-lg" />
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-yellow-400">State-of-the-art Computer Lab</h3>
              <p className="text-white/80 mt-2">
                Equipped with modern systems and high-speed internet for advanced learning.
              </p>
            </div>
          </div>

          {/* Renovations */}
          <div className="md:flex md:flex-row-reverse md:items-center md:space-x-10" data-aos="fade-left">
            <img src={stage} alt="Renovation" className="w-full md:w-1/2 rounded-xl shadow-lg" />
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-yellow-400">Assembly Stage Renovation</h3>
              <p className="text-white/80 mt-2">
                Upgraded the school’s assembly stage to provide a more professional and welcoming environment
                for events and gatherings.
              </p>
            </div>
          </div>

          {/* Resource Center */}
          <div className="md:flex md:items-center md:space-x-10" data-aos="fade-right">
            <img src={rc} alt="Resource Center" className="w-full md:w-1/2 rounded-xl shadow-lg" />
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-yellow-400">Fully Functional Resource Center</h3>
              <p className="text-white/80 mt-2">
                Features AI-powered Audio/Video Conferencing for enhanced learning and collaboration.
              </p>
            </div>
          </div>

          {/* RO Plant */}
          <div className="md:flex md:flex-row-reverse md:items-center md:space-x-10" data-aos="fade-left">
            <img src={filter} alt="Water Filtration" className="w-full md:w-1/2 rounded-xl shadow-lg" />
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-yellow-400">RO Water Filtration Plant</h3>
              <p className="text-white/80 mt-2">
                Ensuring clean and safe drinking water for all students and staff.
              </p>
            </div>
          </div>

          {/* Solarization */}
          <div className="md:flex md:items-center md:space-x-10" data-aos="fade-right">
            <img src={solor} alt="Solarization" className="w-full md:w-1/2 rounded-xl shadow-lg" />
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-yellow-400">Solarization of Campus</h3>
              <p className="text-white/80 mt-2">
                Promoting sustainability with solar-powered energy across the campus.
              </p>
            </div>
          </div>

          {/* Mosque */}
          <div className="md:flex md:flex-row-reverse md:items-center md:space-x-10" data-aos="fade-left">
            <img src={mosque} alt="School Mosque" className="w-full md:w-1/2 rounded-xl shadow-lg" />
            <div className="mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-yellow-400">Construction of Mosque</h3>
              <p className="text-white/80 mt-2">
                A peaceful place to instill moral and religious values among students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureDevelopment;
