import React from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ Manually import images
import s1 from '../../assets/Galleryimages/s1.jpg';
import s2 from '../../assets/Galleryimages/s2.jpg';
import s3 from '../../assets/Galleryimages/s3.jpg';
import s4 from '../../assets/Galleryimages/s4.jpg';
import s5 from '../../assets/Galleryimages/s5.jpeg';
import s6 from '../../assets/Galleryimages/s6.jpg';
import s7 from '../../assets/Galleryimages/s7.jpg';
import s8 from '../../assets/Galleryimages/s8.jpg';
import s9 from '../../assets/Galleryimages/s9.jpg';
import s10 from '../../assets/Galleryimages/s10.jpg';
import s11 from '../../assets/Galleryimages/s11.jpg';
import s12 from '../../assets/Galleryimages/s12.jpg';
import s13 from '../../assets/Galleryimages/s13.jpg';
import s14 from '../../assets/Galleryimages/s14.jpg';
import s15 from '../../assets/Galleryimages/s15.jpg';
import s16 from '../../assets/Galleryimages/s16.jpg';
import s17 from '../../assets/Galleryimages/s17.jpg';
import s18 from '../../assets/Galleryimages/s18.jpg';
import s19 from '../../assets/Galleryimages/s19.jpg';
import s20 from '../../assets/Galleryimages/s20.jpg';
import s21 from '../../assets/Galleryimages/s21.jpg';
import s22 from '../../assets/Galleryimages/s22.jpg';
import s23 from '../../assets/Galleryimages/s23.jpg';
import s24 from '../../assets/Galleryimages/s24.jpg';
import s25 from '../../assets/Galleryimages/s25.jpg';
import s26 from '../../assets/Galleryimages/s26.jpeg';
import s27 from '../../assets/Galleryimages/s27.jpeg';
import s28 from '../../assets/Galleryimages/s28.jpeg';

const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28];

const SportsDay = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Banner */}
      <div
        className="relative mt-20 md:mt-31 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
        style={{ backgroundImage: `url(${s1})` }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>
        <div className="z-10 w-full max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Sports Day</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="text-white"> &gt; </span>
            <span className="text-yellow-300 cursor-pointer" onClick={() => navigate("/gallery")}>
              Gallery
            </span>
            <span className="text-white"> &gt; Sports Day</span>
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`s${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default SportsDay;
