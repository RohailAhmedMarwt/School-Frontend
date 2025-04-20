import React from "react";
import { useNavigate } from "react-router-dom";
import bgAdmissions from "../assets/images/prinmess.jpg"; // Replace with your own banner
import { motion } from "framer-motion";

const Admissions = () => {
  const navigate = useNavigate();

  const steps = [
    "Collect Admission Form",
    "Fill in Required Details",
    "Attach Required Documents",
    "Submit to Admin Office",
    "Await Interview / Test Call",
    "Final Confirmation by School",
  ];

  return (
    <div className="pt-20 bg-gray-100 min-h-screen">
      {/* Top Hero Banner */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgAdmissions})` }}
      >
        <div className="absolute inset-0 bg-green-900/80 z-0"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">
            Admissions
          </h1>
          <p className="text-sm md:text-base drop-shadow">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt; Admissions</span>
          </p>
        </motion.div>
      </div>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Eligibility",
            desc: "Students must meet age and academic criteria for the class they are applying for.",
          },
          {
            title: "Required Documents",
            desc: "Passport-sized photos, B-Form or Birth Certificate, Parent's CNIC copy, etc.",
          },
          {
            title: "Admission Criteria",
            desc: "Written test and interview will be conducted based on class level.",
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-2xl transition border border-white"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Admission Process Timeline */}
      <div className="bg-white py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Admission Process</h2>
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`flex items-center gap-4 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow">
                {idx + 1}
              </div>
              <div className="bg-green-100 p-4 rounded-lg shadow w-full">
                <p className="font-medium text-gray-800">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Form CTA */}
      <div className="text-center py-10">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/path-to-admission-form.pdf" // Replace with your actual PDF path
          download
          className="inline-block px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-xl transition-all duration-300"
        >
          📥 Download Admission Form
        </motion.a>
      </div>
    </div>
  );
};

export default Admissions;
