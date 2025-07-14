import { useNavigate } from 'react-router-dom';

function AdminProposal () {
  const regarys = useNavigate();

  return (
    <>
      <div className="admin-proposal-container">
        <div className="admin-proposal-container-inside">
          <h1>Proposal</h1>
          <div className="container-list-hibah">
            <div className="list-hibah" onClick={() => regarys('/dashboard-admin/proposal/hibah')}>
              <img src="/Hibah.png" alt="gambar hibah"/>
              <h3>Hibah</h3>
            </div>
            <div className="list-hibah" onClick={() => regarys('/dashboard-admin/proposal/beasiswa')}>
              <img src="/beasiswa.png" alt="gambar hibah"/>
              <h3>Beasiswa</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProposal;
