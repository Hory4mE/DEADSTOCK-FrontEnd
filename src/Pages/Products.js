import React , {useState , useEffect } from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Features from "../Components/ForHomePage/Features";
import Footer from "../Components/Universal/Footer";
import ProductList from "../Components/ForProducts/ProductList";
import { useUserData } from '../context/AuthContext';

function Products() {

  const {fetchCurrentUser , setIsLoginModalOpen , isLoginModalOpen} = useUserData();
  useEffect(() => {
    fetchCurrentUser();
  },[isLoginModalOpen])

  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <ProductList />
      <Features />
      <Footer />
    </div>
  );
}

export default Products;
