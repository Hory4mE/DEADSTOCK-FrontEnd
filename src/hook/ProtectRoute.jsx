import React , {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useUserData } from '../context/AuthContext';

const ProtectRoute = ({ children, requireRoles = [] }) => {
  const { setCurrentUser ,fetchCurrentUser } = useUserData();

  useEffect(() => {
    const fetchData = async () => {
    try {
        const userData = await fetchCurrentUser();

        if (!userData|| !userData.role) {
          return <Navigate to="/login" />;
        }
      
        const userRole = userData.role;
        setCurrentUser(userData);
        console.log('check role');
        const matchRoles = !requireRoles.length || requireRoles.includes(userRole);
      
        if (!matchRoles) {
          return <Navigate to="/" />;
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

