import React , {useState , useEffect } from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import HeroSection from "../Components/ForHomePage/HeroSection";
import WhatsNew from "../Components/ForHomePage/ProductCard";
import Features from "../Components/ForHomePage/Features";
import Reviews from "../Components/ForHomePage/Reviews";
import Footer from "../Components/Universal/Footer";
import { useAuth } from '../context/AuthContext';


function App() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const accessToken = urlParams.get('access_token');
  const refreshToken = urlParams.get('refresh_token');

  if (accessToken !== null && refreshToken !== null) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    window.location.href = 'http://localhost:3000'
  }



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
