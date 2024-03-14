import React from "react";
import NavBar from "./Components/NavBar";
import WelcomeBanner from "./Components/WelcomeBanner";
import HeroSection from "./Components/HeroSection";
function App() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
