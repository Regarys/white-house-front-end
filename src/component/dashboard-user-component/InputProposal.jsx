import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Dropdown from '../../component/interaction/Dropdown.jsx'

function InputProposal() {
  const navigate = useNavigate();


  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE4NTc3NjE2LTQwOGUtNGM5NS04MGNhLTYxZWUxYmVjZDExMyIsInJvbGUiOiJ1c2VyIiwibmFtZSI6InJlZ2FyIiwiaWF0IjoxNzUyMTY1NDg4LCJleHAiOjE3NTIyNTE4ODh9.3s30MIWA_XIDWb4Tb7xxJNIaED_kbO057dmJJwTX-9Q"

  const [ bagian, setBagian ] = useState('');
  const [ suratDari, setSuratDari ] = useState('');
  const [ kabupatenKota, setKabupatenKota ] = useState('');
  const [ nomorSurat, setNomorSurat ] = useState('');
  const [ tanggalSurat, setTanggalSurat ] = useState('');
  const [ perihal, setPerihal ] = useState('');
  const [ alamat, setAlamat ] = useState('');
  const [ namaPengurus, setNamaPengurus ] = useState('');
  const [ nominalHibah, setNominalHibah ] = useState('');
  const [ fileScan, setFileScan ]  = useState(null);

  const [ pilihBagian, setPilihBagian] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await axios.get(`http://localhost:8080/api/address/regencies`, {
          headers :{
            Authorization : `Bearer ${token}`
          }
        });
        setPilihBagian(response.data)
        console.log(response.data);
      } catch (error) {
        console.error(`Error Fetching Users : ${error}`)
      }
    }
    fetchData();

  }, [])



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('regencies_id', kabupatenKota);
      formData.append('address', alamat);
      formData.append('surat_from', suratDari);
      formData.append('nomor_surat', nomorSurat);
      formData.append('tanggal_surat', tanggalSurat);
      formData.append('perihal', perihal);
      formData.append('sub_id', bagian);
      formData.append('nama_pengurus', namaPengurus);
      formData.append('nominal_anggaran', nominalHibah);
  
      if (fileScan) {
        formData.append('scan_surat_permohonan', fileScan);
      }
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE4NTc3NjE2LTQwOGUtNGM5NS04MGNhLTYxZWUxYmVjZDExMyIsInJvbGUiOiJ1c2VyIiwibmFtZSI6InJlZ2FyIiwiaWF0IjoxNzUyMTIwODYyLCJleHAiOjE3NTIyMDcyNjJ9.Ve7Zo2pHdOgAhhaH7vGPI8-61riuBWjidbvLpbYz8HA"
      // const token = localStorage.getItem('token'); // ganti sesuai tempat kamu simpan token
      const response = await axios.post('http://localhost:8080/api/proposal/add/hibah', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log(response.data);
      alert('Proposal berhasil dikirim!');
    } catch (err) {
      console.error(err);
      alert('Gagal mengirim proposal.');
    }
  };

  return(
    <>
      <div className="content-container">
        <h1>Input Proposal</h1>
          <form className="form-proposal" onSubmit={handleSubmit}>
          <div className="container-input-proposal">
            <div className="left-section">
              <div className="custom-input-proposal">
                <h3>Bagian</h3>
                  <input
                    type="text"
                    value={bagian}
                    onChange={(e) => setBagian(e.target.value)}
                  />
              </div>
              <div className="custom-input-proposal">
                <h3>Surat Dari</h3>
                <input
                    type="text"
                    value={suratDari}
                    onChange={(e) => setSuratDari(e.target.value)}
                  />
              </div>
              <div className="custom-input-proposal">
                <h3>Kabupaten/Kota</h3>
                <Dropdown label={kabupatenKota|| "Pilih Bagian"}>
                  {pilihBagian.map((item) => (
                    <p
                      key={item.regencies_id}
                      onClick={() => {
                        setKabupatenKota(item.named);
                      }}
                    >
                      {item.type} {item.named}
                    </p>
                  ))}
                </Dropdown>
              </div>
              <div className="custom-input-proposal">
                <h3>Nomor Surat</h3>
                <input
                    type="text"
                    value={nomorSurat}
                    onChange={(e) => setNomorSurat(e.target.value)}
                />
              </div>
              <div className="custom-input-proposal">
                <h3>Tanggal Surat</h3>
                <input
                    type="date"
                    value={tanggalSurat}
                    onChange={(e) => setTanggalSurat(e.target.value)}
                />
              </div>
              <div className="custom-input-proposal">
                <h3>Perihal</h3>
                <input
                    type="text"
                    value={perihal}
                    onChange={(e) => setPerihal(e.target.value)}
                />
              </div>
            </div>
            <div className="middle-section">
              <div className="custom-input-proposal">
                <h3>Nama Pengurus</h3>
                <input
                    type="text"
                    value={namaPengurus}
                    onChange={(e) => setNamaPengurus(e.target.value)}
                />
              </div>
              <div className="custom-input-proposal">
                <h3>Nominal Hibah</h3>
                <input
                    type="number"
                    value={nominalHibah}
                    onChange={(e) => setNominalHibah(e.target.value)}
                />
              </div>
              <div className="custom-input-proposal">
                <h3>Surat Permohonan</h3>
                <div className="custom-input-file-proposal">
                  <input
                    type="file"
                    id="fileScan"
                    onChange={(e) => setFileScan(e.target.files[0])}
                  />
                  <label htmlFor="fileScan">Input File</label>
                </div>
              </div>
              {/* <div className="custom-input-proposal"> */}
              {/*   <h3>Scan RAB</h3> */}
              {/*   <div className="custom-input-file-proposal"> */}
              {/*     <input type="file" id="fileInput"/> */}
              {/*     <label htmlFor="fileInput">Input File</label> */}
              {/*   </div> */}
              {/* </div> */}
            </div>
            <div className="right-section">
              <div className="button-container-proposal">
                <button type="submit">Submit</button>
                <br/>
                <button type="button" onClick={() => navigate(-1)}>Cancel</button>
              </div>
            </div>
          </div>
          <div className="custom-input-proposal-alamat">
            <h3>Alamat</h3>
            <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          </form>
      </div>
    </>
  );
}

export default InputProposal;
