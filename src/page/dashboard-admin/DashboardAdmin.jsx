import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

import SidebarAdmin from '../../component/dashboard-component/SidebarAdmin.jsx';
import MainDashboardAdmin from '../../component/dashboard-component/MainDashboardAdmin.jsx';
import UserManagementDashboardAdmin from '../../component/dashboard-component/UserManagementDashboardAdmin.jsx';
import UserManagementDashboardAdminDetail from '../../component/dashboard-component/UserManagementDashboardAdminDetail.jsx';
import AdminSurat from '../../component/dashboard-component/AdminSurat.jsx';

import AdminProposal from '../../component/dashboard-component/AdminProposal.jsx';
import AdminProposalHibah from '../../component/dashboard-component/AdminProposalHibah.jsx';
import AdminProposalHibahInput from '../../component/dashboard-component/AdminProposalHibahInput.jsx';

import AdminProposalBeasiswa from '../../component/dashboard-component/AdminProposalBeasiswa.jsx';
import AdminProposalBeasiswaInput from '../../component/dashboard-component/AdminProposalBeasiswaInput.jsx';

function DashboardAdmin() {
  const [search, setSearch ] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded.role !== 'admin') {
        navigate('/dashboard');
      }
    } else {
      navigate('/');
    }
  }, [navigate, token]);



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
            <Route path="surat" element={<AdminSurat/>}/>
            <Route path="proposal" element={<AdminProposal/>}/>
            <Route path="proposal/hibah" element={<AdminProposalHibah/>}/>
            <Route path="proposal/hibah/input" element={<AdminProposalHibahInput/>}/>
            <Route path="proposal/beasiswa" element={<AdminProposalBeasiswa/>}/>
            <Route path="proposal/beasiswa/input" element={<AdminProposalBeasiswaInput/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin;
