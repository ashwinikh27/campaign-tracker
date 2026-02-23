import React, { useState } from 'react';
import '../App.css';

export default function Login({ onLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!username || !password) {
            setErrorMessage('Please enter both username and password.');
            return;
        }

        onLogin(username);
    };

    return (
        <div className="login-wrapper">
            <div className="card login-card">
                <h1 className="login-title">Campaign Tracker</h1>
                <p className="login-subtitle">Sign in to manage your data.</p>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <form onSubmit={handleLoginSubmit} className="login-form">

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{ width: '100%' }}
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}