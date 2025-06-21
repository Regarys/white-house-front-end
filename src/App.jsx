import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Dashboard from './page/dashboard.jsx';
import LoginPage from './page/LoginPage.jsx';
import RegisterPage from './page/RegisterPage.jsx';
import DashboardAdmin from './page/dashboard-admin/DashboardAdmin.jsx';

import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/dashboard-admin" element={<DashboardAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
