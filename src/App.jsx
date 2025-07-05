import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './page/LoginPage.jsx';
import RegisterPage from './page/RegisterPage.jsx';

import Dashboard from './page/dashboard-user/dashboard.jsx';

import DashboardAdmin from './page/dashboard-admin/DashboardAdmin.jsx';

import SettingPage from './page/settings/SettingPage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard/>}/>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/dashboard-admin/*" element={<DashboardAdmin/>}/>
          <Route path="/settings" element={<SettingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
