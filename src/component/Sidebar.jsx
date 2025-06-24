import { useState } from 'react'; // can you gar search something simpler than just writing this import everytime?
import { useNavigate } from 'react-router';

function Sidebar() {
  const [ toggleKebas, setToggleKebas ] = useState(false);
  const navigate = useNavigate();

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
          <h3 className="menu-background">Dashboard</h3>
          <div className="dropdown-section">
            <h3
              onClick={() => setToggleKebas(!toggleKebas)}
              className="dropdown-toggle menu-background"
            >Kelola berkas
            </h3>
            {toggleKebas && (
              <div className="dropdown-content">
                <p className="background proposal">Kelola Permohonan</p>
                <p className="background lpj">Kelola LPJ</p>
                <p className="background sm">Kelola Surat Masuk/Keluar</p>
              </div>
            )}
          </div>
          <h3 className="menu-background">Settings</h3>
        </div>
        <h3 className="logout" onClick={() => navigate('/')}>Logout</h3>
      </div>
    </div>
  )
}

export default Sidebar;
