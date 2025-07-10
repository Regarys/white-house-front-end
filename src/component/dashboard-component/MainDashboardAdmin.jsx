function MainDashboardAdmin() {
  return(
  <>
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
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Phone</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {/*css nya rusak ni*/}
              <tr>
                <td>1</td>
                <td>Arsen</td>
                <td>Arsen@gmail.com</td>
                <td>651238</td>
                <td className="file">LPJ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MainDashboardAdmin;
