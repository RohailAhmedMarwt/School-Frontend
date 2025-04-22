import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Mail, PhoneCall, MapPin } from "lucide-react";
import logo from "../assets/images/logobg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-10 pb-5 px-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-green-700 pb-6">
        {/* Logo + Description */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-2" />
          <h2 className="text-lg font-bold mb-2 text-white">FG Piffers Abbottabad</h2>
          <p className="text-sm text-gray-300">
            A Premier Educational Institution Committed to Excellence in Academics and Character Building.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/academics" className="hover:underline">Academics</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:ml-10">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> <a href="mailto:Pifferhs.atd@gmail.com" className="hover:underline">Pifferhs.atd@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall size={16} /> <a href="tel:0992-395444" className="hover:underline">0992-395444</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>Abbottabad Cantt, Khyber Pakhtunkhwa</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://youtube.com/@fgeimediaofficial?si=Zvov1V0iiDeT_Ktm" target="_blank" rel="noreferrer">
              <FaYoutube className="text-red-500 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://www.facebook.com/share/1R2nzwDVCo/" target="_blank" rel="noreferrer">
              <FaFacebook className="text-blue-500 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/company/fgeischool/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-blue-400 text-xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-white mt-6">
        &copy; {new Date().getFullYear()} FG Piffers Abbottabad. All rights reserved. <br />
        Developed by <a href="https://portfolio-nine-smoky-39.vercel.app" target="_blank" rel="noreferrer" className="text-yellow-400 underline hover:text-green-600">
  Rohail Ahmed
</a>

      </div>
    </footer>
  );
};

export default Footer;
