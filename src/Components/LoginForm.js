import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; 
import logo from "./images/WowHRLogo.png"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setError('');

    // Validate input fields
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password.');
      return;
    }

    // Check credentials
    if (username === 'admin' && password === 'admin') {
      navigate('/home');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper sign-in">
        <form onSubmit={handleLogin}>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          {/* <div className="remember">
            <label><input type="checkbox" /> Remember me</label>
          </div> */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
