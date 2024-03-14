import React from "react";
import NavBar from "./Components/NavBar";
import WelcomeBanner from "./Components/WelcomeBanner";
import HeroSection from "./Components/HeroSection";
import WhatsNew from "./Components/ProductCard";


function App() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <HeroSection />
      <WhatsNew />
    </div>
  );
}

export default App;
