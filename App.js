// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { isAuthenticated } from './auth';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup navigate={useNavigate()} />} />
        <Route path="/login" element={<Login navigate={useNavigate()} />} />
        <Route path="/todo" element={isAuthenticated() ? <Todo /> : <Navigate to="/login" />} />
      </Routes>
  
  );
}

export default App;
