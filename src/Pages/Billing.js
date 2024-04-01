import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import Billing from "../Components/ForBill/Billing";


function Cart() {

    return (
        <div>
            <WelcomeBanner />
            <NavBar />
            <Billing />
            <Footer />
        </div>
    );
}

export default Cart;
