import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import OrderHistory from "../Components/ForHistory/OrderHistory";
import AccountDetails from "../Components/ForHistory/AddressDetails";
import AccountProfile from "../Components/ForHistory/AccountProfile";


function Account() { 


  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <AccountProfile />
      {/* <AccountDetails />
      <OrderHistory />    */}
      <Footer />
    </div>
  );
}

export default Account;
