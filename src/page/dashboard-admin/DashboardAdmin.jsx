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
              <p>check</p>
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
                <p>LPJ</p>
              </div>
            </div>
            <div className="container-info-admin">
              <div className="persentage-admin">
                <p><span className="progress-value-admin proposal-p">50%</span></p>
                <p><span className="progress-value-admin lpj-p">70%</span></p>
                <p><span className="progress-value-admin sm-p">100%</span></p>
              </div>
              <div className="calendar-admin">
                <p>hola</p>
              </div>
            </div>
            <div className="note-admin">
              <p>Catatan Terkini</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin;
