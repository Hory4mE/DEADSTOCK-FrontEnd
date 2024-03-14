import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Features from "../Components/ForHomePage/Features";
import Footer from "../Components/Universal/Footer";
import ProductList from "../Components/ForProducts/ProductList";


function Products() {
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
