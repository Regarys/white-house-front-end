
function InputProposal() {
  return(
    <>
      <div className="content-container">
        <h1>Input Proposal</h1>
          <form className="form-proposal">
          <div className="container-input-proposal">
            <div className="left-section">
              <div className="custom-input-proposal">
                <h3>Bagian</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Surat Dari</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Kabupaten/Kota</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Nomor Surat</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Tanggal Surat</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Perihal</h3>
                <input type="text"/>
              </div>
            </div>
            <div className="middle-section">
              <div className="custom-input-proposal">
                <h3>Tanggal Surat</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Perihal</h3>
                <input type="text"/>
              </div>
              <div className="custom-input-proposal">
                <h3>Surat Permohonan</h3>
                <div className="custom-input-file-proposal">
                  <input type="file" id="fileInput"/>
                  <label htmlFor="fileInput">Input File</label>
                </div>
              </div>
              <div className="custom-input-proposal">
                <h3>Scan RAB</h3>
                <div className="custom-input-file-proposal">
                  <input type="file" id="fileInput"/>
                  <label htmlFor="fileInput">Input File</label>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="button-container-proposal">
                <button type="submit">Submit</button>
                <br/>
                <button type="submit">Cancel</button>
              </div>
            </div>
          </div>
          <div className="custom-input-proposal-alamat">
            <h3>Alamat</h3>
            <input type="text"/>
          </div>
          </form>
      </div>
    </>
  );
}

export default InputProposal;
