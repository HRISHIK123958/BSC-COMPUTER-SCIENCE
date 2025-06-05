import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Features from './Features';
import ContactUs from './ContactUs';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        
         </Routes>
    </Router>
  );
}


export default App;

