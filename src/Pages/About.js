import React from "react";
import NavBar from "../Components/NavBar";
import WelcomeBanner from "../Components/WelcomeBanner";
import WhatsNew from "../Components/ProductCard";
import Features from "../Components/Features";
import Footer from "../Components/Footer";


function About() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <WhatsNew />
      <Features />
      <Footer />
    </div>
  );
}

export default About;
