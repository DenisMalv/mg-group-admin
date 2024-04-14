// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  Navigate, Outlet, useLocation } from 'react-router-dom';
// import { getToken } from 'redux/tokenSlice/tokenSlice';

function PrivateRoute({ children }) {
  // const isLogin = useSelector(getToken);
  // const navigate = useNavigate()
  const isLogin = false;
  let location = useLocation();

  // useEffect(()=>{
  //   if(isLogin && location.pathname)
  // },[])

  return (
  <>
    {location.pathname === '/' 
      ? isLogin ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
      : isLogin ? <Outlet/> : <Navigate to="/login" />
    }
  </>
  );
}

export default PrivateRoute;
