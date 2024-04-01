import React , {useEffect} from "react";
import NavBar from "../Components/Universal/NavBar";
import WelcomeBanner from "../Components/Universal/WelcomeBanner";
import Footer from "../Components/Universal/Footer";
import LoginForm from "../Components/ForAuth/BoxLogin";
import { useUserData } from '../context/AuthContext';
import { Link , useNavigate} from "react-router-dom";

function Login() {
  const {fetchCurrentUser , isLoginModalOpen} = useUserData();
  const navigate = useNavigate();
  useEffect(() => {
    fetchCurrentUser();
  },[fetchCurrentUser])

  useEffect(() => {
    if (isLoginModalOpen) {
      navigate('/');
    }
  }, [isLoginModalOpen, navigate]);

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
