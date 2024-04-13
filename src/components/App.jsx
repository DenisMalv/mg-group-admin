import React from 'react';
// import { lazy, Suspense } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import AuthLayout from './Layout/AuthLayout';
// import Loader from './Loader/Loader';

const DashboardPage = lazy(() => import('pages/DashboardPage.js'));
const ContentPage = lazy(() => import('pages/ContentPage.js'));
const CalculationPage = lazy(() => import('pages/CalculationPage.js'));
const UsersPage = lazy(() => import('pages/UsersPage.js'));
const SecurityPage = lazy(() => import('pages/SecurityPage.js'));
const SupportPage = lazy(() => import('pages/SupportPage.js'));

const RegisterPage = lazy(() => import('pages/RegisterPage.js'));
const LoginPage = lazy(() => import('pages/LoginPage.js'));
const Page404 = lazy(() => import('pages/Page404.js'));

const PrivateRoute = lazy(() => import('pages/PrivateRoute.js'));
const PublicRoute = lazy(() => import('pages/PublicRoute.js'));

const App = () => {
  return (
    <>
      {/* <Suspense fallback={<div style={{opacity:0.2}}>123</div>}> */}
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            {/* <Route index element={<HomePage />} /> */}
            <Route
              path="register"
              element={
                <PublicRoute>
                    <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                   <LoginPage />
                </PublicRoute>
              }
            />
          </Route>


          <Route path="/" element={<Layout />}>
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="content"
              element={
                <PrivateRoute>
                  <ContentPage />
                </PrivateRoute>
              }
            />
            <Route
              path="calculation"
              element={
                <PrivateRoute>
                  <CalculationPage />
                </PrivateRoute>
              }
            />
            <Route
              path="users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="security"
              element={
                <PrivateRoute>
                  <SecurityPage />
                </PrivateRoute>
              }
            />
            <Route
              path="support"
              element={
                <PrivateRoute>
                  <SupportPage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route path="*" element={<Page404 />} />
          
        </Routes>
      {/* </Suspense> */}
    </>
  );
  // }
};

export default App;
