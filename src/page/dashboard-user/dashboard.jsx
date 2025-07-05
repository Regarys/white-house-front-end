import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from '../../component/dashboard-user-component/Sidebar.jsx';
import MainDashboard from '../../component/dashboard-user-component/MainDashboard.jsx';
import InputProposal from '../../component/dashboard-user-component/InputProposal.jsx';

function Dashboard() {
  return(
    <div style={{ display : "flex"}}>
      <Sidebar/>
      <Routes>
        <Route path="" element={<MainDashboard/>}/>
        <Route path="proposal" element={<InputProposal/>}/>
      </Routes>
    </div>
  )
}

export default Dashboard;
