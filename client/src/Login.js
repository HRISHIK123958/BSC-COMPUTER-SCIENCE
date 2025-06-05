import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { validateLogin } from './LoginValidation'; // Import validateLogin function

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({});

        // Validate credentials
        const validationErrors = validateLogin(credentials);
        if (Object.keys(validationErrors).length) {
            // If there are validation errors, update state and do not proceed
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await fetch('http://localhost:3002/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Redirect on successful login
            navigate('/Dashboard');
        } catch (error) {
            console.error(error);
            // Optionally, handle the error (e.g., showing an error message to the user)
        }
    };

    return (
        <div className="login-page">
            {/* Navigation and links */}
            <nav className="navbar">
                <div className="brand-title">SHIPSY</div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
            </nav>
            <div className="login-container">
                <div className="login-form-container">
                    <h1 className="login-title">Login to Your Account</h1>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div>
                            <label htmlFor="email" className="login-label">Username</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={credentials.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div>
                            <label htmlFor="password" className="login-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <button type="submit" className="login-button">Sign In</button>
                    </form>
                    <Link to="/SignupForm" className="back-home-link">Don't have an Account! Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
