import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';


function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nik, setNik] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) =>{
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirm_password', confirmPassword);
    formData.append('nik', nik);
    formData.append('full_name', fullName);
    formData.append('gender', gender);
    formData.append('address', address);
    formData.append('id_card_photo', file);
    try{
      const response = await axios.post('http://localhost:8080/api/users/signup', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
      });
      console.log(response.data);
    } catch (error){
      console.error('Error Details:', error.response ? error.response.data : error.message); 
    }
  }



  return(
    <div className="container">
      <div className="container-info">
        <div className="container-image">
          <img src="/gubsu.png" alt="gambar-kantor-gubernur-sumatera-utara"/>
          <img src="/logo-pemprov-gubsu.png" alt="logo-pemprov-gubsu" className="logo-pemprov-gubsu"/>
        </div>
      </div>
      <div className="container-input">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit} className="container-input-text" >
          <div>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <br />
            <input
              type="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <br />
            <input
              type="password"
              id="confirmPassword"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="fullName"
              placeholder="full name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <br />
            <input
              type="text"
              id="nik"
              placeholder="nik" 
              value={nik}
              onChange={e => setNik(e.target.value)}
            />
            <br />
            <div className="gender-choice">
                  <input
                    type="radio"
                    name="gender"
                    value="Pria"
                    checked={gender === 'Pria'}
                    onChange={(e) => setGender(e.target.value)}
                    className="gender-radio"
                  />
                  <p>Pria</p> 
            <br />
                  <input
                    type="radio"
                    name="gender"
                    value="Wanita"
                    checked={gender === 'Wanita'}
                    onChange={(e) => setGender(e.target.value)}
                    className="gender-radio"
                  />
                  <p>Wanita</p> 
            </div>
            <input
              type="text"
              id="address"
              placeholder="address" 
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <br />
             <input
              type="file"
              id="idCardPhoto"
              placeholder="foto ktp" 
              accept="image/*"
              onChange={handleFileChange}
              className="button-file"
            />
           </div>
          <div className="button-container">
            <p>Sudah ada akun? <a onClick={() => navigate('/')}>Login</a></p>
            <button type="submit">REGISTER NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
