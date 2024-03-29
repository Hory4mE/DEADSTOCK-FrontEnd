import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserData } from '../context/AuthContext';

const ProtectRoute = ({ children, requireRoles = [] }) => {
  const { currentUser, setCurrentUser, fetchCurrentUser } = useUserData();
  const [redirectPath, setRedirectPath] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchCurrentUser();
        console.log('Fetched user data:', userData);

        if (userData === undefined || userData === null) {        
          setRedirectPath('/login');
        } else {
          console.log(userData.role);
          const userRole = userData.role;
          setCurrentUser(userData);
          const matchRoles = !requireRoles.length || requireRoles.includes(userRole);
          if (!matchRoles) {
            setRedirectPath('/login');
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  if (redirectPath) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectRoute;
