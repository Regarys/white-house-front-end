import { useNavigate } from 'react-router';
import { jwtDecode } from 'jwt-decode'
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';


function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      console.log(decoded);
      if (decoded.role === 'admin') {
        navigate('/dashboard-admin');
      } else if (decoded.role === 'user'){
        navigate('/dashboard')
      }
    } else {
      navigate('/');
    }
  }, [navigate, token]);


  const loginButton = () =>{
    if (email === "" && password === ""){
      alert("username dan password kosong");
    } else {
      sendData();
    }
  }
  


  const sendData = async() =>{
      try{
      const res = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password
      });

      if (res.data.status === 'success' && res.data.data.role === 'admin') {
        navigate('/dashboard-admin');
        localStorage.setItem("token", res.data.data.token);
      } else if (res.data.status === 'success' && res.data.data.role === 'user'){
        navigate('/dashboard');
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data);
      } else{
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
