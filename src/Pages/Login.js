import React from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import LoginForm from "../Components/ForAuth/BoxLogin";

function Login() {
  return (
    <div>
      <WelcomeBanner />
      <NavBar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
