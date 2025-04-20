import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";
import StartLoading from "./pages/StartLoading";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Admissions from "./pages/Admissions";
import ELibrary from "./pages/ELibrary";
import ContactUs from "./pages/ContactUs";
import PrincipalMessage from "./pages/PrincipalMessage";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import AchievementsThisYear from "./pages/AchievementsThisYear";
import './App.css';
import CivilAwrDay from "./pages/GalleryAlbum/CivilAwrDay";
import DefenceDay from "./pages/GalleryAlbum/DefenceDay";
import EnvironmentalDay from "./pages/GalleryAlbum/EnvironmentalDay";
import IndependenceDay from "./pages/GalleryAlbum/IndependenceDay";
import IqbalDay from "./pages/GalleryAlbum/IqbalDay";
import KashmirDay from "./pages/GalleryAlbum/KashmirDay";
import SportsDay from "./pages/GalleryAlbum/SportsDay";
import VisitCondFfCenter from "./pages/GalleryAlbum/VisitCondFfCenter";
import VisitDos from "./pages/GalleryAlbum/VisitDos";
import VisitRdChaklala from "./pages/GalleryAlbum/VisitRdChaklala";
import VisitRdpindi from "./pages/GalleryAlbum/VisitRdpindi";



// ✅ AOS Import and Init
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // ✅ AOS Initialization
    AOS.init({
      duration: 1200,
      once: false,
      offset: 50,
    });
  }, []);

  return loading ? (
    <StartLoading />
  ) : (
    
    <Router>
      <ScrollToTop />
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/e-library" element={<ELibrary />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/achievements-this-year" element={<AchievementsThisYear />} />
        
        <Route path="/gallery/visit-rd-pindi" element={<VisitRdpindi />} />
        <Route path="/gallery/visit-rd-chaklala" element={<VisitRdChaklala />} />
        <Route path="/gallery/visit-dos" element={<VisitDos />} />
        <Route path="/gallery/visit-commandant-ff-center" element={<VisitCondFfCenter />} />
        <Route path="/gallery/kashmir-day" element={<KashmirDay />} />
        <Route path="/gallery/independence-day" element={<IndependenceDay />} />
        <Route path="/gallery/civil-awareness-day" element={<CivilAwrDay />} />
        <Route path="/gallery/iqbal-day" element={<IqbalDay />} />
        <Route path="/gallery/defence-day" element={<DefenceDay />} />
        <Route path="/gallery/environmental-day" element={<EnvironmentalDay />} />
        <Route path="/gallery/sports-day" element={<SportsDay />} />
      </Routes>
    </Router>
  );
};

export default App;
