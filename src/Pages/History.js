import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import OrderHistory from "../Components/ForHistory/OrderHistory";
import AccountDetails from "../Components/ForHistory/AccountDetails";


function History() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <OrderHistory />
      <AccountDetails />
      <Footer />
    </div>
  );
}

export default History;
