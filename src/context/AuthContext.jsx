import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
    const fetchCurrentUser = async () => {
      try {
        const access_token = localStorage.getItem('access_token');
        const refresh_token = localStorage.getItem('refresh_token');
        
        console.log(access_token);
        console.log(refresh_token);

        console.log(isLoginModalOpen);

        if (!refresh_token || !access_token) {
          throw new Error('No tokens found');
        }

        const response = await axios.get('http://localhost:5000/user/check-login', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },     
        });
        
        if (response.status === 200) {
          console.log(response.data);
          if(response.data !== null){
            setCurrentUser(response.data);
            return response.data;
          } 
        }    
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log('Token expired');
          localStorage.removeItem('access_token');
          await refresh_tokens();
        } else {
          setCurrentUser(null); 
          console.log('No tokens found or other error');
        }
      }
    };


  const refresh_tokens = async () => {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      const response = await axios.post('http://localhost:5000/user/refresh', {}, {
        headers: {
          'Authorization': `Bearer ${refresh_token}`
        }
      });

      localStorage.removeItem('refresh_token');
      localStorage.removeItem('access_token');

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      console.log('Token refreshed successfully');
 
    } catch (error) {
      console.warn('Cannot refresh tokens:', error);
    }
  }

  return (
    <AuthContext.Provider value={{ currentUser , setCurrentUser , fetchCurrentUser , isLoginModalOpen, setIsLoginModalOpen}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserData= () => {
  const { currentUser, setCurrentUser, fetchCurrentUser, isLoginModalOpen, setIsLoginModalOpen } = useContext(AuthContext);
  return { currentUser, setCurrentUser, fetchCurrentUser, isLoginModalOpen, setIsLoginModalOpen };
};