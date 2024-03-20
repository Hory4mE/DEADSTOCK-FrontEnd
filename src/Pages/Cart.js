import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Features from "../Components/ForHomePage/Features";
import Footer from "../Components/Universal/Footer";
import CartZone from "../Components/ForCart/CartZone";
import StyledWith from "../Components/ForProducts/StyledWith";


function Cart() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <CartZone />
      <StyledWith />
      <Features />
      <Footer />
    </div>
  );
}

export default Cart;
