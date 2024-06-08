import { useSelector } from 'react-redux';
import { Outlet,useNavigate } from 'react-router-dom';
// import { getToken } from 'redux/tokenSlice/tokenSlice';
import { getToken } from 'redux/user/userSlice';
import { useGetUserQuery } from 'redux/auth/authAPI';
import { useEffect } from 'react';

const PublicRoute = ({ children }) => {
  const isLogin = useSelector(getToken);
  const {data} = useGetUserQuery()
  const navigate = useNavigate()
  useEffect(()=>{
    if(data && data.user){
      // navigate('/dashboard')
    }
  },[data, navigate])

  // const isLogin = false
  console.log('public',isLogin)
  // return isLogin  ? <Navigate to="/dashboard" /> : <Outlet/>;
  return <Outlet/>;
};

export default PublicRoute;
