import { useNavigate } from 'react-router-dom';

function SidebarAdmin() {
  const navigate = useNavigate();
  
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
          <h2 onClick={() => navigate('/dashboard-admin')}>Dashboard</h2>
          <h2>Kelola Berkas</h2>
          <h2 onClick={() => navigate('/dashboard-admin/users')}>Kelola Pengguna</h2>
          <h2>Settings</h2>
          <h2 className="logout-button">Log Out</h2>
        </div>
      </div>
    </>
  )
}

export default SidebarAdmin;
