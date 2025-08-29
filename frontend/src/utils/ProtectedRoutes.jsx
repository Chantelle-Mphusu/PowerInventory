import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children, requiredRole }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // User is not authenticated
      navigate('/login');
      return;
    }

    if (!requiredRole.includes(user.role)) {
      // User does not have the required role
      navigate('/unauthorized');
      return;
    }
  }, [user, navigate, requiredRole]);

  
  if (!user) {
    return null; 
  }

  if (!requiredRole.includes(user.role)) {
    return null; 
  }

  return children;
};

export default ProtectedRoutes;
