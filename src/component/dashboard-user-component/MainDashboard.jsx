import { useNavigate } from 'react-router-dom';

function MainDashboard() {
  const navitage = useNavigate();

  return(
     <div className="content-container">
       <h1>PROGRES HARIAN</h1>
      <div className="search-container">
         <form>
           <input type="text" name="" placeholder="SEARCH..."/>
           <button type="submit">GO</button>
         </form>
         <a href="#" className="notification">
           <img src="/notification.png" alt="notifikasi icon"/>
         </a>
      </div>
      <div className="menu-container">
        <div className="menu proposal" onClick={() => navitage('/dashboard/proposal')}>
          <p>proposal</p>
        </div>
        <div className="menu lpj">
          <p>lpj</p>
        </div>
        <div className="menu surat-masuk">
          <p>surat-masuk</p>
        </div>
      </div>
      <div className="persentage-ovr-container">
        <h3>Progress Pengajuan Document</h3>
        <div className="persentage-container">
          <p className="persentage proposal"><span className="progress-value">50%</span></p>
          <p className="persentage lpj"><span className="progress-value">70%</span></p>
          <p className="persentage sm"><span className="progress-value">100%</span></p>
        </div>
      </div>
     </div>
  )
}

export default MainDashboard;
