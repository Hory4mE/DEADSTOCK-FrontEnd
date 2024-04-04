import React , {useEffect} from "react";
import { useUserData } from '../context/AuthContext';
import Compo_dashBoard from "../Components/ForAdmin/Dashboard/Compo_DashBoard"

function Dashboard() {

  const {fetchCurrentUser , setIsLoginModalOpen , isLoginModalOpen} = useUserData();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const accessToken = urlParams.get('access_token');
  const refreshToken = urlParams.get('refresh_token');
  if (accessToken !== null && refreshToken !== null) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    setIsLoginModalOpen(true);
    window.location.href = 'http://localhost:3000/dashboard'
  }

  useEffect(() => {
    fetchCurrentUser();
  },[isLoginModalOpen])
  

  return (
    <div>
      <Compo_dashBoard />
    </div>
  );
}

export default  Dashboard;