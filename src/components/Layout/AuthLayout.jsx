// import { Container } from 'components/App.styled';
// import { AppBar } from 'components/AppBar/AppBar';
// import { Header, Footer, MainContent } from './Layout.styled';
// import { MainContent } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Loader from 'components/Loader/Loader';

const AuthLayout = ({children}) => {
  return (
    <div>
          <div>Logo</div>
          <Suspense fallback={<div>LOADING</div>}>
            <Outlet/>
          </Suspense>
    </div>
  );
};

export default AuthLayout;
