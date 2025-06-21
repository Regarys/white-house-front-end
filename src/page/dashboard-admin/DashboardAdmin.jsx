

function DashboardAdmin() {
  return(
     <>
      <div className="dashboard-admin">
        <header>
          <h1>Kesra</h1>
          <form>
            <input type="text" name="" value="search"/>
            <button type="submit">Go</button>
          </form>
          <a href="#" className="notification">
            <img src="/notification.png" alt="notifikasi icon"/>
          </a>
        </header>

        <div className="container-admin">
          <div className="sidebar-admin">
            <div className="sidebar-admin-profile">
              <img src="/profile.jpg" alt="profile picure"/>
            </div>
            <div className="sidebar-admin-navigation">
              <p>check</p>
            </div>
          </div>
          <div className="main-admin">
            <div className="file-buttons">
              <p>LPJ</p>
              <p>LPJ</p>
              <p>LPJ</p>
            </div>
            <div className="container-info-admin">
              <div className="persentage-admin">
                <p><span className="progress-value-admin">50%</span></p>
                <p><span className="progress-value-admin">70%</span></p>
                <p><span className="progress-value-admin">100%</span></p>
              </div>
              <div className="calendar-admin">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardAdmin;
