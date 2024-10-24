/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Register from './Components/Register';
import Profile from './Components/Profile';

function App() {
  return (
    <>
      <Router>
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
