import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function AdminProposalBeasiswa () {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");


  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await axios.get("http://localhost:8080/api/proposal/list/admin", {
          headers :{
            Authorization : `Bearer ${token}`
          }
        });
        const beasiswaData = response.data.data.filter(item => item.type_id === 2);
        setData(beasiswaData);
        console.log(response.data.data);
      } catch (error) {
        console.error(`Error Fetching Users : ${error}`)
      }
    }
    fetchData();
  }, []);

  return(
    <>
      <div className="admin-container-proposal-hibah">
        <div className="admin-container-proposal-hibah-inside">
          <h1>List Proposal Beasiswa</h1>
          <div className="container-table-proposal">
            <table className="table-proposal">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nomor Surat</th>
                  <th>Surat Dari</th>
                  <th>Perihal</th>
                  <th>Alamat</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index)=>(
                  <tr key={data.proposal_id} onClick={() => handleData(data)} >
                    <td>{index + 1}</td>
                    <td>{data.nomor_surat}</td>
                    <td>{data.surat_from}</td>
                    <td>{data.perihal}</td>
                    <td>{data.address}</td>
                    <td>{data.tanggal_surat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={() => navigate('/dashboard-admin/proposal/beasiswa/input')}>Add Beasiswa</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProposalBeasiswa;
