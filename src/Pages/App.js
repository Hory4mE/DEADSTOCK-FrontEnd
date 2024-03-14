import React from "react";
import NavBar from "../Components/NavBar";
import WelcomeBanner from "../Components/WelcomeBanner";
import HeroSection from "../Components/HeroSection";
import WhatsNew from "../Components/ProductCard";
import Features from "../Components/Features";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";


function App() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <HeroSection />
      <WhatsNew />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
