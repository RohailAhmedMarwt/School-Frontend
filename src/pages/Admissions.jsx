import React from "react";
import { useNavigate } from "react-router-dom";
import bgAdmissions from "../assets/images/complab.jpg";
import { motion } from "framer-motion";
import { FaUserCheck, FaFileAlt, FaClipboardList } from "react-icons/fa";

const Admissions = () => {
  const navigate = useNavigate();

  const steps = [
    "Collect Admission Form from School",
    "Fill in Required Details Carefully",
    "Attach All Required Documents",
    "Submit Form to Admin Office",
    "Wait for Interview / Test Call",
    "Receive Final Confirmation",
  ];

  const cards = [
    {
      title: "Eligibility",
      desc: "Applicants must meet the age and previous class criteria before applying.",
      icon: <FaUserCheck />,
    },
    {
      title: "Required Documents",
      desc: "Photos, B-Form / Birth Certificate, Parent's CNIC copy, and previous transcript.",
      icon: <FaFileAlt />,
    },
    {
      title: "Admission Criteria",
      desc: "A written test and interview will be conducted based on the class level.",
      icon: <FaClipboardList />,
    },
  ];

  return (
    <div className="bg-green-950 text-white min-h-screen">
      {/* Banner */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgAdmissions})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>
        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-3">Admissions</h1>
          <p className="text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            <span className="text-white"> &gt; Admissions</span>
          </p>
        </div>
      </div>

      {/* Glass Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg border border-green-400 shadow-2xl p-6 rounded-2xl hover:scale-105 transition duration-300"
          >
            <div className="text-green-300 text-4xl mb-3">{card.icon}</div>
            <h3 className="text-lg font-bold text-yellow-400 mb-2">{card.title}</h3>
            <p className="text-green-100">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-4 bg-green-900/60">
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-12">
          Admission Process
        </h2>

        <div className="max-w-3xl mx-auto relative space-y-14 border-l-4 border-yellow-400 pl-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[22px] top-1 w-5 h-5 bg-yellow-400 rounded-full border-4 border-green-950 shadow-md z-10" />
              <div className="bg-green-800/60 p-5 rounded-xl shadow">
                <p className="text-green-100 font-medium">{step}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: "🎓", label: "Seats Available", value: "Limited" },
          { icon: "📅", label: "Min Age", value: "5+ Years" },
          { icon: "📝", label: "Test Required", value: "Yes" },
          { icon: "💰", label: "Fee Info", value: "Available at Office" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-green-700/50 text-white rounded-2xl p-6 shadow-lg border border-green-400 hover:scale-105 transition-all"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h4 className="font-bold text-lg">{item.label}</h4>
            <p className="text-sm text-green-200">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-green-950 text-white min-h-screen flex flex-col">
  {/* Your content sections */}

  {/* Final Note Section */}
  <div className="max-w-4xl mx-auto bg-green-800/70 border border-green-600 text-white p-8 rounded-xl mb-16 text-center shadow-xl flex-grow">
    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
      Admission Form Available at School Office
    </h3>
    <p className="text-base text-gray-200 ">
      The admission form is available physically from the school office. Please visit during working hours for more information.
    </p>
  </div>

  {/* Contact CTA */}
  <div className="max-w-4xl mx-auto bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-xl shadow-lg mb-20 text-center">
    <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
      Still Have Questions?
    </h3>
    <p className="text-base text-gray-800 mb-4">
      Our office team is ready to assist you with the admission process. Feel free to reach out for any queries.
    </p>
    <button
      onClick={() => navigate("/contact-us")}
      className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-md transition duration-200 ease-in-out"
    >
      Contact Us Now
    </button>
  </div>
</div>



    </div>
  );
};

export default Admissions;
