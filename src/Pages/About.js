import React , {useState , useEffect } from "react";
import NavBar from "../Components/NavBar";
import WelcomeBanner from "../Components/WelcomeBanner";
import WhatsNew from "../Components/ProductCard";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import { useUserData } from '../context/AuthContext';

function About() {
  const {fetchCurrentUser , setIsLoginModalOpen , isLoginModalOpen} = useUserData();
  useEffect(() => {
    fetchCurrentUser();
  },[isLoginModalOpen])
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
