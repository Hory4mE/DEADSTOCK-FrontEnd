import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import HeroSection from "../Components/ForHomePage/HeroSection";
import WhatsNew from "../Components/ForHomePage/ProductCard";
import Features from "../Components/ForHomePage/Features";
import Reviews from "../Components/ForHomePage/Reviews";
import Footer from "../Components/Universal/Footer";


import { useAuth } from '../context/AuthContext'


function App() {
  const { isLogin  , checkLoginStatus} = useAuth();
  checkLoginStatus();
  // console.log(isLogin);
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
