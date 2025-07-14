import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function AdminProposalHibah () {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const bagianOptions = [
    { id: 1, name: "Agama" },
    { id: 2, name: "Pendidikan" },
    { id: 3, name: "Lembaga" }
  ];

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await axios.get("http://localhost:8080/api/proposal/list/admin", {
          headers :{
            Authorization : `Bearer ${token}`
          }
        });
        const beasiswaData = response.data.data.filter(item => item.type_id === 1);
        setData(beasiswaData);
        console.log(response.data.data);
      } catch (error) {
        console.error(`Error Fetching Users : ${error}`)
      }
    }
    fetchData();
  }, []);


  return (
    <>
      <div className="admin-container-proposal-hibah">
        <div className="admin-container-proposal-hibah-inside">
          <h1>List Proposal Hibah</h1>
          <div className="container-table-proposal">
            <table className="table-proposal">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nomor Surat</th>
                  <th>Surat Dari</th>
                  <th>Perihal</th>
                  <th>Alamat</th>
                  <th>Bagian</th>
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
                    <td>{bagianOptions.find(b => b.id === data.hibah_detail.sub_id)?.name || "-"}</td>
                    <td>{data.tanggal_surat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={() => navigate('/dashboard-admin/proposal/hibah/input')}>Add Hibah</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProposalHibah;
