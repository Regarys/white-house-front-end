import Sidebar from '../component/Sidebar.jsx';
import MainDashboard from '../component/MainDashboard.jsx';

function Dashboard() {
  return(
    <div style={{ display : "flex"}}>
      <Sidebar/>
      <MainDashboard/>
    </div>
  )
}

export default Dashboard;
