import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Faculty Images
import principalimg from "../assets/images/principal1.png";
import ladyimg from "../assets/images/lady.png";
import tariq from "../assets/images/tariq.png";
import usama from "../assets/images/usama.png";
import marban from "../assets/images/marban.png";
import triq from "../assets/images/triq.png";
import aftab from "../assets/images/aftab.png";
import eric from "../assets/images/eric.png";
import fida from "../assets/images/fida.png";
import abbasi from "../assets/images/abbasi.png";
import ahmed from "../assets/images/ahmed.png";
import noman from "../assets/images/noman.png";
import fayaz from "../assets/images/fayaz.png";
import sajid from "../assets/images/sajid.png";

const facultyMembers = [
  { name: "Mr. Azhar Iqbal Malik", title: "Principal", qualification: "M.Phil (Physics), DIT", image: principalimg },
  { name: "Mrs. Sadia", title: "Vice Principal", qualification: "Masters (Islamiyat), M.Ed", image: ladyimg },
  { name: "Mr. M. Tariq", title: "SST", qualification: "Masters (Urdu), M.Ed", image: tariq },
  { name: "Mr. Usama Ali", title: "Computer Instructor", qualification: "BS CS (Gold Medalist), B.Ed", image: usama },
  { name: "Mr. Mehrban", title: "TGT", qualification: "B.A (Urdu), B.Ed", image: marban },
  { name: "Mr. Tariq Hussain", title: "DM", qualification: "B.A (English), Drawing Certification", image: triq },
  { name: "Ms. Mehwish Saleem", title: "EST", qualification: "M.A (Urdu), M.Ed", image: ladyimg },
  { name: "Ms. Aisha Bibi", title: "EST", qualification: "M.A (Education), Multiple Certifications", image: ladyimg },
  { name: "Ms. Irum Mehnaz", title: "EST", qualification: "M.A (Islamiyat), M.Ed", image: ladyimg },
  { name: "Mr. M. Aftab", title: "H-T", qualification: "M.A (Islamiyat)", image: aftab },
  { name: "Mr. Rohail Eric", title: "EST", qualification: "Masters (Chemistry)", image: eric },
  { name: "Mr. Fidaullah", title: "EST", qualification: "Masters (Physics)", image: fida },
  { name: "Mr. M. Bilal Abbasi", title: "Internee", qualification: "Masters (IR)", image: abbasi },
  { name: "Mrs. Kinza Safder", title: "Internee", qualification: "BS CS (Gold Medalist)", image: ladyimg },
  { name: "Mrs. Hajra Naveed", title: "Internee", qualification: "B.A", image: ladyimg },
  { name: "Mr. Ahmad Nawaz", title: "Lab Attendant", qualification: "B.A, JDP", image: ahmed },
  { name: "Mr. Fayyaz ur Rehman", title: "Lab Assistant", qualification: "B.A", image: fayaz },
  { name: "Mr. Nouman Zaffar", title: "LDC", qualification: "B.A", image: noman },
  { name: "Mr. Sajid Hussain Malik", title: "UDC", qualification: "M.A", image: sajid },
];

const Faculty = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 sm:px-12 py-16 overflow-x-hidden">
      <h2 className="text-3xl font-bold text-green-900 mb-10 text-center" data-aos="fade-up">
        Meet Our Faculty
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white w-[250px] rounded-xl shadow-md border border-transparent hover:border-green-600 hover:shadow-green-300 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out text-center flex flex-col"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="w-full">
              <img
                src={member.image}
                alt={`${member.name} - ${member.title}`}
                className="w-full h-[260px] object-cover rounded-t-xl"
              />
            </div>
            <div className="pt-1 pb-2 bg-white w-full border-t border-gray-200">
              <h3 className="text-base font-bold text-green-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.title}</p>
              <p className="text-sm text-gray-500 mt-1">{member.qualification}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
