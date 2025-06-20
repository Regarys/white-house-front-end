import { useState } from 'react'; // can you gar search something simpler than just writing this import everytime?
import { useNavigate } from 'react-router';

function Sidebar() {
  const [ toggleKebas, setToggleKebas ] = useState(false);
  const navigate = useNavigate();

  return(
    <div className="container">
      <div className="sidebar">
        <p className="sidebar-logo">KESRA APP</p>
        <div className="profile-container">
          <img src="/profile.jpg" alt=""/>
          <p>regar</p>
          <p>regar@gmail.com</p>
        </div>
        <div className="menu">
          <h3>Dashboard</h3>
          <div className="dropdown-section">
            <h3
              onClick={() => setToggleKebas(!toggleKebas)}
              className="dropdown-toggle"
            >{toggleKebas ? "▼" : "▶"} Kelola berkas
            </h3>
            {toggleKebas && (
              <div className="dropdown-content">
                <p>Kelola Permohonan</p>
                <p>Kelola LPJ</p>
                <p>Kelola Surat Masuk/Keluar</p>
              </div>
            )}
          </div>
          <h3>Settings</h3>
        </div>
        <h3 className="logout" onClick={() => navigate('/')}>Logout</h3>
      </div>
    </div>
  )
}

export default Sidebar;
