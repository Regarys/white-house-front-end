import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButton = () =>{
    if (email === "" && password === ""){
      alert("username dan password kosong");
    } else {
      sendData();
    }
  } //butuh pop up

  const sendData = async() =>{
      try{
      const res = await axios.post('http://192.168.27.57:8080/api/users/login', {
        email,
        password
      });

      if (res.data.status === 'success') {
        const userData = res.data.status;
        navigate('/dashboard');
      } else {
        alert(`Login fail : ${res.data.message}`)
      }

    }catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        alert('Login error: ' + error.response.data.message);
      } else {
        alert('Login error: server tidak merespon');
      }
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
        <h1>LOGIN</h1>
        <p>LETS START FIRST</p>
        <div className="container-input-text">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <p>Tidak ada akun? <a onClick={() => navigate('/register')}>Register</a></p>
        <button type="submit" onClick={loginButton}>LOGIN NOW</button>
      </div>
    </div>
  );
}

export default LoginPage;
