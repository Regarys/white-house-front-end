import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '/vendor/pdf.worker.min.mjs';
import axios from 'axios';

import RupiahFormat from '../../component/utility/RupiahFormat.jsx';

function DetailProposal () {
  const [activeFileUrl, setActiveFileUrl] = useState(null);
  const { proposalId } = useParams();
  const [ data, setData ] = useState([]);
  const [ numberPage, setNumberPage ] = useState(1);
  const [ totalPage, setTotalPage ] = useState(null);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJmNzdmM2ZiLWU4ZDktNDhmYy04MjBmLTg4MDI3MTdhNjdlOCIsInJvbGUiOiJ1c2VyIiwibmFtZSI6InJlZ2FyIiwiaWF0IjoxNzUyMjIyNDk3LCJleHAiOjE3NTIzMDg4OTd9.ADw6Ys9Zl_q6pu9iPZ0hZUQTqc0GhUcSQQhqF9tvtps"

  console.log(proposalId);
   useEffect(()=>{
     async function fetchData() {
       try{
         const response = await axios.get(`http://localhost:8080/api/proposal/${proposalId}/get`, {
           headers :{
             Authorization : `Bearer ${token}`
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


  return(
    <>
      <div className="content-container">
        <h1>Detail Proposal</h1>
        <div className="detail-proposal-container">
          <div className="detail-section-container">
            <div className="detail-left-section">
              <div className="info-container">
                <h3>Nomor Surat</h3>
                <p>{data.nomor_surat}</p>
              </div>
              <div className="info-container">
                <h3>Surat Dari</h3>
                <p>{data.surat_from}</p>
              </div>
              <div className="info-container">
                <h3>Perihal</h3>
                <p>{data.perihal}</p>
              </div>
              <div className="info-container">
                <h3>Jenis</h3>
                <p>{data.type?.type_id}</p>
              </div>
            </div>
            <div className="detail-right-section">
              <div className="info-container">
                <h3>Bagian</h3>
                <p>{data.hibah_detail?.sub_id}</p>
              </div>
              <div className="info-container">
                <h3>Nama Pengurus</h3>
                <p>{data.hibah_detail?.nama_pengurus}</p>
              </div>
              <div className="info-container">
                <h3>Nominal</h3>
                <p><RupiahFormat nominal={data.hibah_detail?.nominal_anggaran}/></p>
              </div>
              <div className="info-container" onClick={() => setActiveFileUrl(`http://localhost:8080/${data.attachments?.[0]?.file_path}`)}>
                <h3>Lampiran Proposal</h3>
                <div className="lampiran-proposal" >
                  <img src="/pdf.png" alt="icon pdf"/>
                  <p>{data.attachments?.[0]?.file_name}</p>
                </div>
              </div>
            </div>
            <div className="detail-end-container">
              <div className="pdf-container" style={{ border: "1px solid #ccc", maxHeight: "700px", width: "550px", overflow: "auto", position: "absolute", top: "20px", right: "20px"}}>
                {activeFileUrl ? (
                  <Document file={activeFileUrl} onLoadSuccess={({ numPages }) => setTotalPage(numPages)}>
                    <Page pageNumber={numberPage} renderTextLayer={false} renderAnnotationLayer={false} width={550} />
                  </Document>
                ) : (
                    <p>Silakan pilih lampiran untuk ditampilkan.</p>
                  )}
                <div className="button-pdf-container">
                  <SlArrowLeftCircle onClick={() => setNumberPage((number) => Math.max(number - 1, 1)) }/>
                  <SlArrowRightCircle onClick={() => setNumberPage((number) => Math.min(number + 1, totalPage)) }/>
                </div>
                <p>Page :{numberPage} - {totalPage}</p>
              </div>
            </div>
          </div>
          <div className="info-container-alamat">
            <h3>Alamat</h3>
            <p>{data.address}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProposal;
