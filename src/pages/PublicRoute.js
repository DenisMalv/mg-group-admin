// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { getToken } from 'redux/tokenSlice/tokenSlice';

const PublicRoute = ({ children }) => {
  // const isLogin = useSelector(getToken);
  const isLogin = false

  return isLogin ? <Navigate to="/dashboard" /> : <Outlet/>;
};

export default PublicRoute;
