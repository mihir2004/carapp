// src/pages/LandingPage.js
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/Features";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
