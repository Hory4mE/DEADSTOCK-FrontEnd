import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import PaymentForm from "../Components/ForPayment/PaymentForm";


function Payment() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <PaymentForm />
      <Footer />
    </div>
  );
}

export default Payment;
