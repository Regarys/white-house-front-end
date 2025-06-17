
function MainDashboard() {
  return(
     <div className="content-container">
       <h1>Dashboard</h1>
      <div className="search-container">
        <input type="text" name="" value="nothing" onChange={(e) => e.preventDefault()}/>
        <button type="submit">Search</button>
      </div>
      <div className="menu-container">
        <div className="menu surat-masuk">
          <p>surat masuk</p>
        </div>
        <div className="menu proposal">
          <p>proposal</p>
        </div>
        <div className="menu lpj">
          <p>lpj</p>
        </div>
      </div>
      <div className="persentage-ovr-container">
        <h3>Progress Pengajuan Document</h3>
        <div className="persentage-container">
          <p className="persentage sm"><span className="progress-value">50%</span></p>
          <p className="persentage proposal"><span className="progress-value">70%</span></p>
          <p className="persentage lpj"><span className="progress-value">100%</span></p>
        </div>
      </div>
     </div>
  )
}

export default MainDashboard;
