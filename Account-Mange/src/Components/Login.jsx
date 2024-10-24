// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Utils/AuthService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const isAuthenticated = AuthService.login(email, password);
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
        <p className="mt-3">
          Don&apos;t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
