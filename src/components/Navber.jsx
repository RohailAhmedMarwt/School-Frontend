import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail, PhoneCall, User, Clock } from "lucide-react";
import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/images/logo1.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);

  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowTop(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "E-Library", path: "/e-library" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <motion.div
        className="w-full"
        initial={{ opacity: 1, height: "auto" }}
        animate={{ opacity: showTop ? 1 : 0, height: showTop ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ pointerEvents: showTop ? "auto" : "none" }}
      >
        <div className="w-full bg-green-900 text-yellow-300 font-bold py-1 px-2 text-sm flex items-center justify-between">
          <span className="mr-2 text-white whitespace-nowrap">📢 Latest News:</span>
          <marquee behavior="scroll" direction="left" scrollamount="9" className="w-full">
            Admissions Open (list will be displayed on 7th April) –
          </marquee>
        </div>

        <div className="hidden md:flex w-full bg-gray-100 py-1.4 px-6 justify-between items-center text-medium md:text-base">
          <span className="flex items-center space-x-1">
            <Clock size={16} className="text-green-700" />
            <p className="!text-gray-600">Opened Between 7:00 am - 1:30 pm</p>
          </span>
          <div className="flex space-x-6 items-center">
            <span className="flex items-center space-x-1">
              <Mail size={16} className="text-green-700" />
              <a href="mailto:Pifferhs.atd@gmail.com" className="!text-gray-600 hover:underline">
                Pifferhs.atd@gmail.com
              </a>
            </span>
            <span className="flex items-center space-x-1">
              <PhoneCall size={16} className="text-green-700" />
              <a href="tel:0992-395444" className="!text-gray-600 hover:underline">
                0992-395444
              </a>
            </span>
            <div className="flex space-x-4">
              <a href="https://youtube.com/@fgeimediaofficial?si=Zvov1V0iiDeT_Ktm" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-red-600 text-xl transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.facebook.com/share/1R2nzwDVCo/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-xl transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/company/fgeischool/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 text-xl transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ✅ Navbar */}
      <nav className="w-full bg-white text-black py-2 px-8 shadow-md flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <img src={logo} alt="School Logo" className="w-14 h-14 object-contain" />
            <h1 className="font-semibold text-[18px]">FG Piffers Abbottabad</h1>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-[15px] font-medium whitespace-nowrap relative">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className={`relative cursor-pointer transition duration-300 ${
                  location.pathname === link.path ? "text-green-900 font-semibold" : "text-gray-500"
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
                <motion.div
                  className="absolute left-0 -bottom-[2px] h-[2px] bg-green-900"
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? "100%" : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.li>
            ))}
          </ul>

          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05, background: "green" }}
              className="bg-green-900 cursor-pointer text-gray-200 px-4 py-2 rounded-md flex items-center"
            >
              <span>Login</span>
              <User size={18} />
            </motion.button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-green-900 text-white border border-white rounded-md p-1"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="md:hidden bg-white shadow-md p-4 flex flex-col space-y-6 items-center text-center w-full"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`w-full text-[16px] font-semibold ${
                location.pathname === link.path ? "text-green-900" : "text-gray-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4 mt-4">
            <a href="https://youtube.com/@fgeimediaofficial?si=Zvov1V0iiDeT_Ktm" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 text-xl transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/share/1R2nzwDVCo/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-xl transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/company/fgeischool/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 text-xl transition-transform transform hover:scale-110" />
            </a>
          </div>
          <Link to="/login">
          <motion.button whileHover={{ scale: 1.05 }} className="bg-green-900 text-gray-200 px-6 py-3 w-full rounded-md flex justify-center">
            <span>Login</span>
            <User size={18} />
          </motion.button>
          </Link>
        </motion.div>
        
      )}
    </div>
  );
};

export default Navbar;
