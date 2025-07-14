import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SidebarAdmin() {
  const navigate = useNavigate();
  const [ toggleBerkas, setToggleBerkas ] = useState(false);

  const logOutButton = () => {
    navigate("/");
    localStorage.clear();
  }

  return(
    <>
      <div className="sidebar-admin">
        <div className="sidebar-admin-profile">
          <img src="/profile.jpg" alt="profile picture"/>
          <div className="profile-desc">
            <h3>Regarys</h3>
            <p>regarys@gmail.com</p>
            <p>* ONLINE</p>
          </div>
        </div>
        <div className="sidebar-admin-navigation">
          <h2 onClick={() => navigate('/dashboard-admin')} className="menu-sidebar-admin">Dashboard</h2>
          <div className="menu-sidebar-admin">
            <h2 onClick={() => setToggleBerkas(!toggleBerkas)}
            >Kelola Berkas</h2>
            <div className={`dropdown-content-berkas ${toggleBerkas ? 'open' : '' }`}>
              <p onClick={() => navigate('/dashboard-admin/proposal')}>Proposal</p>
              <p>LPJ</p>
              <p onClick={() => navigate('/dashboard-admin/surat')}>Surat</p>
            </div>
          </div>
          <h2 onClick={() => navigate('/dashboard-admin/users')} className="menu-sidebar-admin">Kelola Pengguna</h2>
          <h2 className="menu-sidebar-admin">Settings</h2>
          <h2 className="logout-button menu-sidebar-admin" onClick={() => logOutButton()}>Log Out</h2>
        </div>
      </div>
    </>
  )
}

export default SidebarAdmin;
