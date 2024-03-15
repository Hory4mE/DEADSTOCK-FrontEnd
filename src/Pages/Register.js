import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import RegisterForm from "../Components/ForAuth/BoxRegister";

function Register() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default Register;
