import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SidebarAdmin from '../../component/dashboard-component/SidebarAdmin.jsx';
import MainDashboardAdmin from '../../component/dashboard-component/MainDashboardAdmin.jsx';
import UserManagementDashboardAdmin from '../../component/dashboard-component/UserManagementDashboardAdmin.jsx';
import UserManagementDashboardAdminDetail from '../../component/dashboard-component/UserManagementDashboardAdminDetail.jsx';

function DashboardAdmin() {
  const [search, setSearch ] = useState('');

  return(
     <>
      <div className="dashboard-admin">
        <header>
          <h1>Kesra</h1>
          <form>
            <input type="text" name="" placeholder="SEARCH..."/>
            <button type="submit">GO</button>
          </form>
          <a href="#" className="notification">
            <img src="/notification.png" alt="notifikasi icon"/>
          </a>
        </header>
        <div className="container-admin">
          <SidebarAdmin/>
          <Routes>
            <Route path="" element={<MainDashboardAdmin/>}/>
            <Route path="users" element={<UserManagementDashboardAdmin/>}/>
            <Route path="user/:userId" element={<UserManagementDashboardAdminDetail/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin;
