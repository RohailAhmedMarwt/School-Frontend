import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgIndependenceDay from "../../assets/Galleryimages/i2.jpg";

// 👇 Replace with your real images
import i1 from "../../assets/Galleryimages/i1.jpg";
import i2 from "../../assets/Galleryimages/i2.jpg";
import i3 from "../../assets/Galleryimages/i3.jpg";
import i4 from "../../assets/Galleryimages/i4.jpeg";
import i5 from "../../assets/Galleryimages/i5.jpeg";
import i6 from "../../assets/Galleryimages/i6.jpeg";
import i7 from "../../assets/Galleryimages/i7.jpg";
import i8 from "../../assets/Galleryimages/i8.jpg";
import i9 from "../../assets/Galleryimages/i9.jpg";
import i10 from "../../assets/Galleryimages/i10.jpeg";
import i11 from "../../assets/Galleryimages/i11.jpg";
import i12 from "../../assets/Galleryimages/i12.jpeg";
import i13 from "../../assets/Galleryimages/i13.jpeg";

const IndependenceDay = () => {
  const navigate = useNavigate();
  const [viewerIndex, setViewerIndex] = useState(null);

  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13];

  const closeViewer = () => setViewerIndex(null);
  const nextImage = () => setViewerIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setViewerIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      {/* Top Banner Section */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${bgIndependenceDay})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>
        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Independence Day</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="text-white"> &gt; </span>
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/gallery")}>
              Gallery
            </span>
            <span className="text-white"> &gt; Independence Day</span>
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transition">
              <img src={src} alt={`Independence Day ${idx + 1}`} className="w-full h-64 object-cover" />
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

export default IndependenceDay;
