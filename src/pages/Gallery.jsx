import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgGallery from "../assets/images/prinmess.jpg";
import rdpindi from "../assets/Galleryimages/rdpindi.jpg";
import rdc12 from "../assets/Galleryimages/rdc12.jpg";
import dos1 from "../assets/Galleryimages/dos1.jpg";
import ff2i from "../assets/Galleryimages/ff2i.jpg";
import k1 from "../assets/Galleryimages/k1.jpeg";
import i4 from "../assets/Galleryimages/i4.jpeg";
import img2 from "../assets/Galleryimages/img2.jpeg";
import d4 from "../assets/Galleryimages/d4.jpeg";
import env5 from "../assets/Galleryimages/env5.jpeg";
import s2 from "../assets/Galleryimages/s2.jpg";

// Images & categories with album links
const galleryImages = [
  {
    src: rdc12,
    category: "Official Visits",
    title: "Visit RD Chaklala",
    link: "/gallery/visit-rd-chaklala",
  },
  {
    src: dos1,
    category: "Official Visits",
    title: "Visit DOS",
    link: "/gallery/visit-dos",
  },
  {
    src: ff2i,
    category: "Official Visits",
    title: "Visit Commandant FF Center",
    link: "/gallery/visit-commandant-ff-center",
  },
  {
    src: rdpindi,
    category: "Official Visits",
    title: "Visit RD Rawalpindi",
    link: "/gallery/visit-rd-pindi",
  },
  {
    src: k1,
    category: "Commemorative Days",
    title: "Kashmir Day",
    link: "/gallery/kashmir-day",
  },
  {
    src: i4,
    category: "Commemorative Days",
    title: "Independence Day",
    link: "/gallery/independence-day",
  },
  {
    src: img2,
    category: "Commemorative Days",
    title: "Civil Awareness Day",
    link: "/gallery/civil-awareness-day",
  },
  {
    src: d4,
    category: "Commemorative Days",
    title: "Defence Day",
    link: "/gallery/defence-day",
  },
  {
    src: env5,
    category: "Commemorative Days",
    title: "Environmental Day",
    link: "/gallery/environmental-day",
  },
  {
    src: s2,
    category: "Sports & Co-Curricular",
    title: "Annual Sports Day",
    link: "/gallery/sports-day",
  },
];

const categories = [
  "All",
  "Official Visits",
  "Commemorative Days",
  "Sports & Co-Curricular",
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryMap = galleryImages.reduce((acc, img) => {
    if (!acc[img.category]) acc[img.category] = [];
    acc[img.category].push(img);
    return acc;
  }, {});

  const getVisibleImages = () => {
    if (selectedCategory === "All") return galleryImages;
    return categoryMap[selectedCategory] || [];
  };

  return (
    <div className="text-gray-800">
      {/* Top Section */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgGallery})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>
        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">Gallery</h1>
          <p className="text-sm md:text-base">
            <span
              className="text-yellow-300 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            <span className="text-white"> &gt; Gallery</span>
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-6xl mx-auto px-4 pt-12 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`border px-5 py-2 rounded-full font-medium cursor-pointer ${
              selectedCategory === cat
                ? "bg-green-800 text-white border-green-900"
                : "bg-white text-green-900 border-gray-300 hover:bg-green-100"
            } transition duration-200`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Divider Line */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <hr className="border-t-2 border-green-800" />
      </div>

      {/* Images or Albums */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {selectedCategory !== "All" && (
          <h2 className="text-2xl font-bold text-green-800 mb-4 border-l-4 pl-3 border-green-800 tracking-wide uppercase">
            {selectedCategory}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getVisibleImages().map((img, idx) => (
            <div
              key={idx}
              onClick={() => img.link && navigate(img.link)}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover"
              />
              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white text-green-800 text-2xl rounded-full w-14 h-14 flex items-center justify-center shadow-md transform scale-75 group-hover:scale-110 transition-all duration-500">
                  ➜
                </div>
              </div>
              {/* Title */}
              {img.title && (
                <div className="p-3 bg-green-800 text-white text-sm font-semibold text-center uppercase tracking-wider shadow-inner">
                  {img.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
