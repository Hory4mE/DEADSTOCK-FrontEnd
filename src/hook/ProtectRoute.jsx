import React , {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useUserData } from '../context/AuthContext';

const ProtectRoute = ({ children, requireRoles = [] }) => {
  const { setCurrentUser ,fetchCurrentUser } = useUserData();

  useEffect(() => {
    const fetchData = async () => {
    try {
        const userData = await fetchCurrentUser();
        setCurrentUser(userData);

   
        if (!userData|| !userData.role) {
          return <Navigate to="/login" replace />;
        }
      
        const userRole = userData.role;
        const matchRoles = !requireRoles.length || requireRoles.includes(userRole);
      
        if (!matchRoles) {
          return <Navigate to="/" replace />;
        }
      
        console.log('Fetched user data:', userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
    };

    fetchData();
  }, []);

  return children;
};
export default ProtectRoute;

