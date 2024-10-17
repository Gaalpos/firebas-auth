import React, { useState, useEffect } from 'react';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {

  return (
    <Router>
      <div className='App'>
        <h1>Login App</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
