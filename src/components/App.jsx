import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import AuthLayout from '../Layout/AuthLayout';


import Page404 from 'pages/Page404.js';

import PrivateRoute from 'pages/PrivateRoute.js';
import PublicRoute from 'pages/PublicRoute.js';
import RegisterConfirmPage from 'pages/RegisterConfirmPage';

const DashboardPage = lazy(() => import('pages/DashboardPage.js'));
const ContentPage = lazy(() => import('pages/ContentPage.js'));
const CalculationPage = lazy(() => import('pages/CalculationPage.js'));
const UsersPage = lazy(() => import('pages/UsersPage.js'));
const SecurityPage = lazy(() => import('pages/SecurityPage.js'));
const SupportPage = lazy(() => import('pages/SupportPage.js'));

const RegisterPage = lazy(() => import('pages/RegisterPage.js'));
const LoginPage = lazy(() => import('pages/LoginPage.js'));

const App = () => {

  return (
  <>
    <Routes>
      {/* Publick routes */}
      <Route element={<PublicRoute/>}>
        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register/:registerToken" element={<RegisterPage />}/>
          <Route path="/confirm/:confirmToken" element={<RegisterConfirmPage />}/>
        </Route>
      </Route>


      {/* Private routes */}
      <Route path="/" element={<PrivateRoute/>}>
          <Route element={<Layout/>}>
            <Route path="dashboard" element={<DashboardPage/>} />
            <Route path="content" element={<ContentPage/>} />
            <Route path="calculation" element={<CalculationPage/>} />
            <Route path="users" element={<UsersPage/>} />
            <Route path="security" element={<SecurityPage/>} />
            <Route path="support" element={<SupportPage/>} />
          </Route>
      </Route>


      {/* Page not Found */}
      <Route path="*" element={<Page404 />} />
      
    </Routes>
  </>
  );
};

export default App;
