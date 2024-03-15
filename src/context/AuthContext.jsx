import React, { createContext, useContext, useState , useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
  const [ user, setUser] = useState([{}])
  const [ isLogin, setIsLogin] = useState(false)
  const [ isRegister, setIsRegister] = useState(false)

  const refresh_token = localStorage.getItem('refresh_token')
  const access_token = localStorage.getItem('access_token')

  const checkLoginStatus = async () => {
    try {
      if(access_token === null && refresh_token === null){
        throw(error)
      }
      const response = await axios.get('http://localhost:5000/user/check-login' , 
      {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
      }
      )

      if (response.data !== null) {
        setUser(response.data.user[0])  
        setIsLogin(true);
      }
      else{
        setIsLogin(false)
        setUser(null)
      }
    } 
    catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('Token expired')
        localStorage.removeItem('access_token');
        await refresh_tokens()
        const newaccess_token = localStorage.getItem('access_token');
        const response = await axios.get('http://localhost:5000/user/check-login' , {
        headers: {
            Authorization: `Bearer ${newaccess_token}`,
        },
      })
      console.log('success2')
      console.log('renew-token')
      const data = response.data;
      if(response.data !== null){
        setIsLogin(true);
        setUser(data.user[0])  
        console.log(isLogin);    
      }  
      } else {
        setIsLogin(false);
        setUser(null)
        console.log('No Token')
      }
    }
  }
  
  const refresh_tokens = async () => {
    try {
      console.log(localStorage.getItem('refresh_token'))
      const response = await axios.post('http://localhost:5000/user/refresh',  
      {
        headers: {
          'Authorization': `Bearer ${refresh_token}`
        }
      })
      localStorage.removeItemItem('refresh_token')
      console.log('access_token Success',response.data.access_token)
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('refresh_token', response.data.refresh_token)
    } catch (error) {
      console.warn('Cannot refreshing tokens:', error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser , isLogin, setIsLogin  ,refresh_tokens  , checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext)
};
