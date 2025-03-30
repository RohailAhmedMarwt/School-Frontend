// src/components/AcademicExcellence.jsx
import rohailImg from "../assets/images/Rohail.jfif";
import hammadImg from "../assets/images/Ahmad.jfif";
import bilalImg from "../assets/images/Bilal.jfif";

const AcademicExcellence = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 overflow-x-hidden">
      <h2
        className="text-3xl font-bold text-green-800 mb-8 text-center"
        data-aos="fade-up"
      >
        Academic Excellence (2024)
      </h2>
      <p
        className="text-lg text-gray-700 font-medium text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        SSC-II Board Results:{" "}
        <span className="text-green-900 font-semibold">100% pass rate</span>{" "}
        with an impressive GPA of{" "}
        <span className="text-green-900 font-semibold">3.96</span>.
      </p>

      {/* Matric Toppers */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4"
          data-aos="fade-up"
        >
          <img
            src={rohailImg}
            alt="Rohail Ahmed"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Rohail Ahmed
          </h3>
          <p className="text-gray-600 text-center">890 marks (80.91%)</p>
        </div>

        <div
          className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src={hammadImg}
            alt="Ahmed Hammad"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Ahmed Hammad
          </h3>
          <p className="text-gray-600 text-center">822 marks (74.73%)</p>
        </div>

        <div
          className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={bilalImg}
            alt="Muhammad Bilal"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Muhammad Bilal
          </h3>
          <p className="text-gray-600 text-center">795 marks (72.27%)</p>
        </div>
      </div>

      {/* MSE & PSE Position Holders */}
      <div className="grid md:grid-cols-2 gap-6">
        <div
          className="bg-green-50 border border-green-300 shadow-md rounded-lg p-6 text-center"
          data-aos="zoom-in"
        >
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Daniyal Khan
          </h3>
          <p className="text-gray-800">86.29% – 1st Position in MSE</p>
        </div>

        <div
          className="bg-green-50 border border-green-300 shadow-md rounded-lg p-6 text-center"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <h3 className="text-xl font-bold text-green-900 mb-2">
            Saqib Azeem
          </h3>
          <p className="text-gray-800">85.11% – 1st Position in PSE</p>
        </div>
      </div>
    </section>
  );
};

export default AcademicExcellence;
