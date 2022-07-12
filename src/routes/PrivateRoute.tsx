import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '~/app/hooks';
import { getIsLogin } from '~/modules/auth/authSlice';

const PrivateRoute: React.FC<any> = ({ children }) => {
  const authed = useAppSelector(getIsLogin);
  const location = useLocation();

  return authed ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
