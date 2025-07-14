import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

import Sidebar from '../../component/dashboard-user-component/Sidebar.jsx';
import MainDashboard from '../../component/dashboard-user-component/MainDashboard.jsx';
import InputProposal from '../../component/dashboard-user-component/InputProposal.jsx';
import ListViewProposal from '../../component/dashboard-user-component/listViewProposal.jsx';
import DetailProposal from '../../component/dashboard-user-component/DetailProposal.jsx';

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded);
      if (decoded.role !== 'user') {
        // Kalau bukan admin, redirect ke dashboard biasa
        navigate('/dashboard-admin');
      }
    } else {
      // Kalau tidak ada token, redirect ke login
      navigate('/');
    }
  }, [navigate, token]);

  return(
    <div style={{ display : "flex"}}>
      <Sidebar/>
      <Routes>
        <Route path="" element={<MainDashboard/>}/>
        <Route path="proposal" element={<ListViewProposal/>}/>
        <Route path="input-proposal" element={<InputProposal/>}/>
        <Route path="detail-proposal/:proposalId" element={<DetailProposal/>}/>
      </Routes>
    </div>
  )
}

export default Dashboard;
