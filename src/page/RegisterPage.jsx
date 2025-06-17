import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const registerButton = async() =>{
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
        <h1>REGISTER</h1>
        <div className="container-input-text">
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <br />
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
        <p>Sudah ada akun? <a onClick={() => navigate('/')}>Login</a></p>
        <button type="submit" onClick={registerButton}>REGISTER NOW</button>
      </div>
    </div>
  );
}

export default RegisterPage;
