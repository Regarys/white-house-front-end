import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = '/vendor/pdf.worker.min.mjs';

function AdminSurat() {
  const [ filePdf, setFilePdf ] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== "application/pdf"){
        alert('Harus Pdf');
        e.target.value = "";
        return;
      }
      setFilePdf(selectedFile)
    }
  }

  return(
    <>
      <div className="container-surat">
        <div className="container-surat-inside">
          <h1>Surat Masuk & Keluar</h1>
          <form style={{display : "flex", margin: "20px", width: "100%"}}>
            <div className="left-section-surat">
              <div className="input-surat">
                <h3>No Surat</h3>
                <input type="text"/>
              </div>
              <div style={{marginTop: "20px"}}>
                <h3>File</h3>
                <div className="container-pdf-surat">
                  {filePdf && (
                    <Document className="pdf-surat"
                      file={filePdf}
                    >
                      <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={550}/>
                    </Document>
                  )}
                  <input type="file" onChange={handleFileChange}/>
                </div>
              </div>
            </div>
            <div className="right-section-surat">
              <div className="input-surat">
                <h3>Date</h3>
                <input type="date"/>
              </div>
              <div className="input-surat-radio">
                <h3>Jenis Surat</h3>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="surat"
                      value="Surat Masuk"
                      id="suratMasuk"
                    />
                    <span>Surat Masuk</span>
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="surat"
                      value="Surat Keluar"
                      id="suratKeluar"
                    />
                    <span>Surat Keluar</span>
                  </label>
                </div>
              </div>
              <div>
                <button type="submit">Simpan</button>
                <button type="button">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminSurat;
