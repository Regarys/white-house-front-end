import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Dropdown from '../../component/interaction/Dropdown.jsx'

function InputProposal() {
  const navigate = useNavigate();

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


  const [ optionKabupatenKota, setOptionKabupatenKota ] = useState('');
  const [ pilihKotaKabupaten, setPilihKotaKabupaten] = useState([]);
  const bagianOptions = [
    { id: 1, name: "Agama" },
    { id: 2, name: "Pendidikan" },
    { id: 3, name: "Lembaga" }
  ];
  const [selectedBagianName, setSelectedBagianName] = useState("");

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await axios.get(`http://localhost:8080/api/address/regencies`, {
          headers :{
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        });
        setPilihKotaKabupaten(response.data.data)
        console.log(response.data.data);
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
      const response = await axios.post('http://localhost:8080/api/proposal/add/hibah', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
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
                <Dropdown label={selectedBagianName || "Pilih Bagian"}>
                  {bagianOptions.map(item => (
                    <p
                      key={item.id}
                      onClick={() => {
                        setBagian(item.id);
                        setSelectedBagianName(item.name);
                      }}
                    >
                      {item.name}
                    </p>
                  ))}
                </Dropdown>
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
                <Dropdown label={optionKabupatenKota|| "Pilih ..."}>
                  {pilihKotaKabupaten.map((item) => (
                    <p
                      key={item.regencies_id}
                      onClick={() => {
                        setOptionKabupatenKota(item.named);
                        setKabupatenKota(item.regencies_id);
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
