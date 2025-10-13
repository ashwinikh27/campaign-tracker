import React, { useState } from 'react';
import '../App.css'; // Ensure styles are applied

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginSubmit = (e) => { // Renamed for clarity
        e.preventDefault();
        setErrorMessage('');

        if (!username || !password) { // Check for both fields
            setErrorMessage('Please enter both username and password.');
            return;
        }

        // Accept any username/password
        onLogin(username);
    };

    const handleRegisterClick = () => {
        // Implement navigation to register page or modal logic here
        console.log('Navigating to Register page...');
    };

    return (
        <div className="login-wrapper">
            {/* Using the standard 'card' class for professional styling */}
            <div className="card login-card">
                {/* Standardized title class */}
                <h1 className="login-title">Campaign Tracker</h1>
                <p className="login-subtitle">Sign in to manage your data.</p>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <form onSubmit={handleLoginSubmit} className="login-form">
                    <div className="form-group"> {/* Standardized group class */}
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-control" // Standardized input class
                        />
                    </div>

                    <div className="form-group"> {/* Standardized group class */}
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control" // Standardized input class
                        />
                    </div>

                    {/* PROFESSIONAL CHANGE: Split into two clear buttons */}
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
                        Login
                    </button>
                    <button type="button" className="btn btn-secondary" style={{ width: '100%' }} onClick={handleRegisterClick}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}