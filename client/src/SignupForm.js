import React, { useState } from 'react';
import './SignupForm.css'; // Make sure to create a corresponding CSS file with your styles.
import { Link, useNavigate } from 'react-router-dom';
import validateInfo from './SignupValidation';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'male', // default gender
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const validationErrors = validateInfo(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:3002/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Signup failed');
            
        }

        const result = await response.json();
        console.log(result);
        alert('Signup successful');
        navigate('/login'); //  navigation after successful signup
        // Here, handle redirection or state update upon successful signup
    } catch (error) {
        console.error('Registration failed:', error);
        // Handle error (e.g., show error message to the user)
    }
} else {
    console.log('Form is invalid', validationErrors);

            // If there are no errors, submit the data
      // Your form submission logic goes here
    }
  };

  return (
    <div className="signup-page">
      <nav className="navbar">
        <div className="brand-title">SHIPSY</div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
      </nav>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {/* First name */}
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        {/* Last name */}
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        {/* Gender */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label> &nbsp;
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p>{errors.email}</p>}
        </div>
        {/* Mobile */}
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
          {errors.mobile && <p>{errors.mobile}</p>}
        </div>
        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupForm;
