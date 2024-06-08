import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import {  Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
// import { getToken } from 'redux/tokenSlice/tokenSlice';
import { getToken, isUser } from 'redux/user/userSlice';
import { useGetUserQuery } from 'redux/authAPI/authAPI';

function PrivateRoute({ children }) {
  // const user = useSelector(getUser)
  const isLogin = useSelector(getToken);

  const {data} = useGetUserQuery()
  const dispatch = useDispatch()
  
  console.log('private',isLogin)
  // const isLogin = false;
  let location = useLocation();
  const navigate = useNavigate()

  useEffect(()=>{
    try {
      if(!data.user){
        dispatch(isUser({
          token:null,
          user:null
        }))
        navigate('/login')
      }
    } catch (error) {
    }
  },[data, dispatch, navigate])

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
