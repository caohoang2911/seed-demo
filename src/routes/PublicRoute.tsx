import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '~/app/hooks';
import { PAGE_DEFAULT_REDIRECT } from '~/config/globalVariable';
import { getIsLogin } from '~/modules/auth/authSlice';

const PublicRoute: React.FC<any> = ({ children }) => {
  const { pathname } = useLocation();
  const isLogin = useAppSelector(getIsLogin);
  const location: any = useLocation();

  if (pathname === '/login' && isLogin) {
    return <Navigate to={location.state?.from?.pathname || PAGE_DEFAULT_REDIRECT} />;
  }

  return <>{children}</>;
};

export default PublicRoute;
