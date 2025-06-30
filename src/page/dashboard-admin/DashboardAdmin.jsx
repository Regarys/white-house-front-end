import { useState } from 'react';

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
              <h2>Dashboard</h2>
              <h2>Kelola Berkas</h2>
              <h2>Kelola Pengguna</h2>
              <h2>Settings</h2>
              <h2 className="logout-button">Log Out</h2>
            </div>
          </div>
          <div className="main-admin">
            <div className="file-buttons">
              <div className="proposal">
                <img src="/propsal.jpg" alt="proposal"/>
                <div className="overlay blue"></div>
                <p>PROPOSAL</p>
              </div>
              <div className="proposal">
                <img src="/lpj.jpg" alt="lpj"/>
                <div className="overlay yellow"></div>
                <p>LPJ</p>
              </div>
              <div className="proposal">
                <img src="/sm.jpg" alt="surat masuk"/>
                <div className="overlay orange"></div>
                <p>SURAT MASUK</p>
              </div>
            </div>
            <div className="container-info-admin">
              <div className="container-persentage-admin">
                <div className="container-progress-value-admin">
                  <h3>PROPOSAL</h3>
                  <div className="progress-value-admin">
                    <p className="persentage-laporan"><span className="persentage-value">50%</span></p>
                  </div>
                </div>
                <div className="container-progress-value-admin">
                  <h3>LPJ</h3>
                  <div className="progress-value-admin proposal-p">
                    <p className="persentage-lpj"><span className="persentage-value">60%</span></p>
                  </div>
                </div>
                <div className="container-progress-value-admin">
                  <h3>SURAT MASUK</h3>
                  <div className="progress-value-admin proposal-p">
                    <p className="persentage-sm"><span className="persentage-value">90%</span></p>
                  </div>
                </div>
                </div>
              <div className="calendar-admin">
                <h3>SENIN, 3 MARET 2025</h3>
                <div className="calendar-admin-diagram">
                  hehe
                </div>
              </div>
            </div>
            <div className="note-admin">
              <table className="note-admin-table">
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>File</th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>Arsen</th>
                  <th>Arsen@gmail.com</th>
                  <th>651238</th>
                  <th className="file">LPJ</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin;
