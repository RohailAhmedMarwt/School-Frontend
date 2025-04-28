import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgSchool from "../assets/images/space.jpg";
import introImage from "../assets/images/intro.jpg";
import mission from "../assets/images/mission1.png";
import vision from "../assets/images/vision1.png";
import WhyChoose from "../components/WhyChoose";
import Faculty from "../components/Faculty";

const Section = ({ id, children }) => (
  <section
    id={id}
    className="min-h-screen snap-start scroll-mt-20 flex flex-col justify-center"
  >
    {children}
  </section>
);

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="text-gray-800">
      {/* Top Section with Background Image */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgSchool})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>

        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">
            Forword to the AboutUs
          </h1>
          <p className="text-sm md:text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt;AboutUs</span>
          </p>
        </div>
      </div>

      {/* Custom Section 1 - Introduction */}
      <section
        id="introduction"
        className="relative min-h-screen flex flex-col justify-center px-8 py-16 bg-white text-center md:text-left overflow-hidden"
      >
        {/* Background Image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${introImage})`,
            opacity: 0.2,
            zIndex: 0,
          }}
        ></div>
        <div className="absolute inset-1 bg-gray opacity-25 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Introduction & School History
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-4xl mx-auto">
            "The FF Center founded the school before the subcontinent was
            divided, setting the groundwork for its illustrious history of
            education and discipline. A new phase of growth and development
            began in 1976 when administrative responsibility was formally turned
            over to the Federal Government Educational Institutions
            (Cantt/Garrison). In 1984, the institution received a high school
            upgrade, demonstrating its expanding role in offering young people
            high-quality education.
            <br />
            <br />
            To meet its growing demands, the school moved to its current
            location in 1986 from its original location on Murree Road. In
            1992–1993, a purpose-designed campus with improved facilities and
            infrastructure was established, greatly enhancing the learning
            environment. The school was located on A-I land, which is an area of
            41 Kanals and 17 Marlas, from 1993 until 2015. However, the total
            size was reduced to the current 22 Kanals and 11 Marlas in January
            2016 when 19 Kanals and 6 Marlas of this land were handed to the
            Station Headquarters Abbottabad.
            <br />
            <br />
            With a solid academic reputation, committed professors, and a
            dedication to the complete development of students, the school
            thrives despite the loss of land. With its roots in tradition and
            its evolution to suit contemporary educational standards, the school
            is a shining example of high-quality education in the area."{" "}
          </p>
        </div>
      </section>

      <section id="mission" className="bg-gray-100 px-8 py-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-900 mb-12">
          Mission & Vision
        </h2>

        {/* Two Columns */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {/* Mission Block */}
          <div
            className="md:w-1/2 flex flex-col items-center px-4 bg-white rounded-xl shadow-md py-8 hover:shadow-lg transition duration-300"
            data-aos="fade-up"
          >
            <img src={mission} alt="Mission Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Mission
            </h3>
            <p className="text-sm text-gray-700 leading-7 px-2">
              To provide high-quality, affordable education that nurtures
              academic excellence, moral integrity, and social responsibility.
            </p>
          </div>

          {/* Vision Block */}
          <div
            className="md:w-1/2 flex flex-col items-center px-4 bg-white rounded-xl shadow-md py-8 hover:shadow-lg transition duration-300"
            data-aos="fade-up"
          >
            <img src={vision} alt="Vision Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Vision
            </h3>
            <p className="text-sm text-gray-700 leading-7 px-2">
              To become a leading Federal Government school known for
              innovation, inclusivity, and holistic student development.
            </p>
          </div>
        </div>
      </section>

      <Faculty />

      <WhyChoose />
    </div>
  );
};

export default AboutUs;
