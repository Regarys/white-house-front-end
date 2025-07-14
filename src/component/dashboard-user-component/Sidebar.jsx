import { useState } from 'react'; // can you gar search something simpler than just writing this import everytime?
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const [ toggleKebas, setToggleKebas ] = useState(false);
  const navigate = useNavigate();

  const logOutButton = () => {
    navigate("/");
    localStorage.clear();
  }

  return(
    <div className="container">
      <div className="sidebar">
        <p className="sidebar-logo">Kesra</p>
        <div className="profile-container">
          <img src="/profile.jpg" alt=""/>
          <div className="identity-container">
            <h2>Regar</h2>
            <div className="email-wrapper" data-email="alsdkfjalsdregar@gmail.com">
              <p>regar@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="menu">
          <h3 className="menu-background" onClick={() => navigate('/dashboard')}>Dashboard</h3>
            <h3
              onClick={() => setToggleKebas(!toggleKebas)}
              className="dropdown-toggle menu-background"
            >Kelola berkas
            </h3>
              <divl className={`dropdown-content ${toggleKebas ? 'open' : ''}`}>
                <p className="background proposal" onClick={()=> navigate('/dashboard/proposal')}>Kelola Permohonan</p>
                <p className="background lpj">Kelola LPJ</p>
                <p className="background sm">Kelola Surat Masuk/Keluar</p>
              </divl>
          <h3 className="menu-background" onClick={() => navigate('/settings')}>Settings</h3>
        </div>
        <h3 className="logout" onClick={() => logOutButton()}>Logout</h3>
      </div>
    </div>
  )
}

export default Sidebar;
