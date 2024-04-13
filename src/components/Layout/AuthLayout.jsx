import { Container } from 'components/App.styled';
// import { AppBar } from 'components/AppBar/AppBar';
// import { Header, Footer, MainContent } from './Layout.styled';
import { MainContent } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Loader from 'components/Loader/Loader';

const AuthLayout = () => {
  return (
    <>
        <Container>
          <div>Logo</div>
        </Container>
      <MainContent>
        <Container>
          <Suspense fallback={<div>loader</div>}>
          
            <Outlet />
          </Suspense>
        </Container>
      </MainContent>
    </>
  );
};

export default AuthLayout;
