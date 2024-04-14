import './AuthLayout.scss'
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Icon from 'components/Icons/IconSprite';

const AuthLayout = ({children}) => {
  return (
    <div className='container'>
      <div className='auth-layout'>
            <Icon classlist='auth-logo' name='logo' width='112' height='56'/>
            <Suspense fallback={<div>LOADING</div>}>
              <Outlet/>
            </Suspense>
      </div>
    </div>
  );
};

export default AuthLayout;
