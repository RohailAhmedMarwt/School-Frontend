import React from 'react'

const ELibrary = () => {
  return (
    <div>
      
    </div>
  )
}

export default ELibrary

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import bgELibrary from "../assets/images/prinmess.jpg";

// const books = [
//   {
//     title: "Urdu Class 9",
//     subject: "Urdu",
//     class: "9",
//     pdfUrl: "https://fbise.edu.pk/ebooks/urdu9.pdf",
//   },
//   {
//     title: "Physics Class 10",
//     subject: "Physics",
//     class: "10",
//     pdfUrl: "https://fbise.edu.pk/ebooks/physics10.pdf",
//   },
//   {
//     title: "Chemistry Class 10",
//     subject: "Chemistry",
//     class: "10",
//     pdfUrl: "https://fbise.edu.pk/ebooks/chemistry10.pdf",
//   },
// ];

// const ELibrary = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* 🔝 Top Banner Section - Don't Touch This :) */}
//       <div
//         className="relative mt-20 w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-start text-white"
//         style={{ backgroundImage: `url(${bgELibrary})` }}
//       >
//         <div className="absolute inset-0 bg-green-900 opacity-70 z-0"></div>

//         <div className="z-10 w-full max-w-6xl mx-auto px-4">
//           <h1 className="text-3xl md:text-4xl font-bold mb-1">E-Library</h1>
//           <p className="text-sm md:text-base">
//             <span
//               className="text-yellow-300 cursor-pointer"
//               onClick={() => navigate("/")}
//             >
//               Home
//             </span>
//             <span className="text-white"> &gt; E-Library</span>
//           </p>
//         </div>
//       </div>

//       {/* 📚 Book List Section */}
//       <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {books.map((book, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
//             >
//               <h2 className="text-xl font-semibold text-green-800 mb-2">{book.title}</h2>
//               <p className="text-gray-600">📘 Subject: {book.subject}</p>
//               <p className="text-gray-600 mb-4">🎓 Class: {book.class}</p>
//               <a
//                 href={book.pdfUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-auto bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition"
//               >
//                 Read Now
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ELibrary;


