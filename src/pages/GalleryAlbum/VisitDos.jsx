import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doss from "../../assets/Galleryimages/dos23.jpg"; // First banner image

// 👇 Import all 33 images
import dos from "../../assets/Galleryimages/dos.jpg";
import dos1 from "../../assets/Galleryimages/dos1.jpg";
import dos2 from "../../assets/Galleryimages/dos2.jpg";
import dos3 from "../../assets/Galleryimages/dos3.jpg";
import dos4 from "../../assets/Galleryimages/dos4.jpg";
import dos5 from "../../assets/Galleryimages/dos5.jpg";
import dos6 from "../../assets/Galleryimages/dos6.jpg";
import dos7 from "../../assets/Galleryimages/dos7.jpg";
import dos8 from "../../assets/Galleryimages/dos8.jpg";
import dos9 from "../../assets/Galleryimages/dos9.jpg";
import dos10 from "../../assets/Galleryimages/dos10.jpg";
import dos11 from "../../assets/Galleryimages/dos11.jpg";
import dos12 from "../../assets/Galleryimages/dos12.jpg";
import dos13 from "../../assets/Galleryimages/dos13.jpg";
import dos14 from "../../assets/Galleryimages/dos14.jpg";
import dos15 from "../../assets/Galleryimages/dos15.jpg";
import dos16 from "../../assets/Galleryimages/dos16.jpg";
import dos17 from "../../assets/Galleryimages/dos17.jpg";
import dos18 from "../../assets/Galleryimages/dos18.jpg";
import dos19 from "../../assets/Galleryimages/dos19.jpg";
import dos20 from "../../assets/Galleryimages/dos20.jpg";
import dos21 from "../../assets/Galleryimages/dos21.jpg";
import dos22 from "../../assets/Galleryimages/dos22.jpg";
import dos23 from "../../assets/Galleryimages/dos23.jpg";
import dos24 from "../../assets/Galleryimages/dos24.jpg";
import dos25 from "../../assets/Galleryimages/dos25.jpg";
import dos26 from "../../assets/Galleryimages/dos26.jpg";
import dos27 from "../../assets/Galleryimages/dos27.jpg";
import dos28 from "../../assets/Galleryimages/dos28.jpg";
import dos29 from "../../assets/Galleryimages/dos29.jpg";
import dos30 from "../../assets/Galleryimages/dos30.jpg";
import dos31 from "../../assets/Galleryimages/dos31.jpg";
import dos32 from "../../assets/Galleryimages/dos32.jpg";

const VisitDos = () => {
  const navigate = useNavigate();
  const [viewerIndex, setViewerIndex] = useState(null);

  const images = [
   
    dos,
    dos1,
    dos2,
    dos3,
    dos4,
    dos5,
    dos6,
    dos7,
    dos8,
    dos9,
    dos10,
    dos11,
    dos12,
    dos13,
    dos14,
    dos15,
    dos16,
    dos17,
    dos18,
    dos19,
    dos20,
    dos21,
    dos22,
    dos23,
    dos24,
    dos25,
    dos26,
    dos27,
    dos28,
    dos29,
    dos30,
    dos31,
    dos32,
  ];

  const closeViewer = () => setViewerIndex(null);
  const nextImage = () => setViewerIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setViewerIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      {/* Top Banner */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${dos})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>
        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Visit to DOS</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="text-white"> &gt; </span>
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/gallery")}>
              Gallery
            </span>
            <span className="text-white"> &gt; Visit to DOS</span>
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transition">
              <img src={src} alt={`Visit to DOS ${idx + 1}`} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <button
                  onClick={() => setViewerIndex(idx)}
                  className="bg-white/40 hover:bg-white/60 backdrop-blur-md p-3 rounded-full shadow-lg"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1829/1829586.png"
                    alt="view icon"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {viewerIndex !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeViewer}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[viewerIndex]}
              alt="Full View"
              className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black p-2 rounded-full"
            >
              ❯
            </button>
            <button
              onClick={closeViewer}
              className="absolute top-2 right-2 bg-white/40 hover:bg-white/70 text-black p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitDos;
