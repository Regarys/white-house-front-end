import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ListViewProposal () {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE4NTc3NjE2LTQwOGUtNGM5NS04MGNhLTYxZWUxYmVjZDExMyIsInJvbGUiOiJ1c2VyIiwibmFtZSI6InJlZ2FyIiwiaWF0IjoxNzUyMTY1NDg4LCJleHAiOjE3NTIyNTE4ODh9.3s30MIWA_XIDWb4Tb7xxJNIaED_kbO057dmJJwTX-9Q"
  useEffect(()=>{

    async function fetchData() {
      try{
        const response = await axios.get("http://localhost:8080/api/proposal/list/proposal", {
          headers :{
            Authorization : `Bearer ${token}`
            //Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        });
        setData(response.data.data)
        console.log(response.data.data);
      } catch (error) {
        console.error(`Error Fetching Users : ${error}`)
      }
    }
    fetchData();

  }, [])

  const handleData = (data) => {
    navigate(`/dashboard/detail-proposal/${data.proposal_id}`);
  }

  return(
    <>
      <div className="content-container">
        <h1>Proposal</h1>
        <div className="container-list-view-proposal">
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
          </div>
          <button onClick={() => navigate('/dashboard/input-proposal')}>Input Proposal</button>
        </div>
      </div>
    </>
  )
}

export default ListViewProposal;
