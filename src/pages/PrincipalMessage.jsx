import React from "react";
import principalImage from "../assets/images/principal1.png";
import bgSchool from "../assets/images/prinmess.jpg";
import { useNavigate } from "react-router-dom";

const PrincipalMessage = () => {
  const navigate = useNavigate();

  const handleNavigateWithDelay = (sectionId) => {
    navigate(`/about-us`);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // short delay to allow page load
  };

  return (
    <div className="bg-gray-100">
      {/* Top Section with Background Image */}
      <div
        className="relative mt-20 md:mt-33 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgSchool})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>

        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            FOREWORD BY THE PRINCIPAL
          </h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/")}>Home</span>
            <span className="text-white"> &gt; FOREWORD BY THE PRINCIPAL</span>
          </p>
        </div>
      </div>

      {/* Principal Message Content */}
      <div className="max-w-6xl lg:mt-17 mx-auto px-4 py-8 flex flex-col md:flex-row gap-6 items-start">
        {/* Left Column */}
        <div className="md:w-[28%] w-full flex flex-col items-center">
          <div className="relative">
            <img
              src={principalImage}
              alt="Principal"
              className="w-[290px] rounded-md md:w-[260px] object-cover block"
            />
            <div className="absolute bottom-0 left-0 w-full bg-green-900 text-white text-center py-2 text-sm">
              Mr. Azhar Iqbal Malik sahab<br />Current (Principal)
            </div>
          </div>

          {/* Explore More Links */}
          <div className="mt-10 w-full flex flex-col items-center">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Explore More
            </h3>
            <ul className="space-y-2 text-sm text-center">
              <li>
                <button
                  onClick={() => handleNavigateWithDelay("introduction")}
                  className="text-blue-700 hover:underline"
                >
                  1. Introduction & School History
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigateWithDelay("mission")}
                  className="text-blue-700 hover:underline"
                >
                  2. Mission & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigateWithDelay("faculty")}
                  className="text-blue-700 hover:underline"
                >
                  3. Faculty Section
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigateWithDelay("why-choose")}
                  className="text-blue-700 hover:underline"
                >
                  4. Why Choose FG Piffers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-[72%] w-full text-gray-800 text-sm leading-relaxed">
  <h2 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "Segoe UI, sans-serif" }}>
    Inspiring Excellence, Discipline, and Leadership Among Our Youth
  </h2>

  <p>
    <strong>FG Public School Boys Piffers Abbottabad</strong> is a distinguished educational institution with a mission of academic excellence, discipline and social development as well as the nurturing of thousands of students to become responsible, confident and self-confident persons with a sense of purpose who continue to contribute meaningfully to the society.
  </p>

  <p className="mt-4">
  We have reached a big milestone this year, because the entire school building has been refurbished and refurbished so that it is more comfortable and conducive for the students to learn. A beautiful Mosque, designed by our famous architects, has been built, to help develop students’ religious values. Many of our classrooms have been upgraded so that they can function better and look better. The Principal’s Office has been re-designed, so that it feels more comfortable and efficient, and the assembly stage has been upgraded so that it’s a larger venue for many schools’ social events and ceremonies.
  </p>

   <p className="mt-4">
   A comprehensive computer lab with new high-quality computers has been established. There is also a Multimedia Room equipped with high-quality projector and smart learning equipment for interactive teaching and learning. For our very young students a specially designed Montessori room has been installed. It provides a vibrant and exciting environment for their education. A water filtration plant has been set up to ensure that all pupils and staff have clean drinking water.
   </p>

  <p className="mt-4">
    Our faculty comprises of qualified, experienced and dedicated teachers who not only are passionate about their subject but are also immensely committed to the personal and moral development of each student. We pride ourselves on the strong relationship between our teachers and students.
  </p>

  <p className="mt-4">
    The students have excelled academically in board examinations and various other internal exams as well. Co-curricular and extra curricular activities of the students have been actively nurtured and excelled, including debates, sports competitions and cultural activities both regional and national level.
  </p>

  <p className="mt-4">
    FG Public School Piffers Abbottabad nurtures and cultivates the mind and spirit of all our students in such a way that they not only learn but also become not only truthful, responsible, confident and compassionate. Our school always endeavours to combine traditional values with the latest technology to provide them with a very good education which will prepare them for a bright future.
  </p>

  <p className="mt-4">
    As the Principal of our school I am proud to see the many achievements and progress made by our many pupils and staff and I would like to thank the hard working teaching staff, the children who work hard and our wonderful parents who look after them so well.
  </p>

  <p className="mt-4">
    I warmly welcome all parents, students, staff and stakeholders to enjoy this enlightening journey with us and further consolidate and promote the prevailing, highest standards of excellence at FG Public School Boys Piffers Abbottabad.
  </p>

  <p className="mt-6 font-semibold">Mr. Azhar Iqbal Malik – Principal</p>
</div>

      </div>
    </div>
  );
};

export default PrincipalMessage;
