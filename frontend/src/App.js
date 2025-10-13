import React, { useState } from 'react';
import CampaignForm from './components/CampaignForm';
import CampaignList from './components/CampaignList';
import Login from './components/Login'; // <<< NEW: Import the Login component
import './App.css'; 

// Component to wrap the main logged-in content, maintaining your original layout
const CampaignTrackerContent = ({ onAdded, refresh, username, onLogout }) => (
    <div className="container">
        <header className="app-header">
            <h1>Campaign Tracker</h1>
            <div className="user-info">
                {/* Adding a logout button and welcome message */}
                <p>Logged in as: <strong>{username}</strong></p>
                <button onClick={onLogout} className="btn btn-primary">
                    Logout
                </button>
            </div>
        </header>

        {/* Apply the card styling to the form */}
        <div className="card form-card"> 
            <CampaignForm onAdded={onAdded} />
        </div>

        {/* Apply the card styling to the list, removing padding for clean table edges */}
        <div className="card table-card"> 
            <CampaignList refresh={refresh} />
        </div>
    </div>
);


export default function App() {
  const [refresh, setRefresh] = useState(0);
  // AUTH STATE: Start logged out (false) to display the login screen first
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Handles successful login from the Login component
  const handleLogin = (user) => {
    setUsername(user);
    setIsLoggedIn(true);
  };

  // Handles logout
  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
  };
  
  const handleCampaignAdded = () => {
      setRefresh(prev => prev + 1);
  }

  return (
    // Apply the global App class
    <div className="App"> 
      {/* CONDITIONAL RENDERING: Show Login or Content */}
      {isLoggedIn ? (
        // Show main content when logged in
        <CampaignTrackerContent 
            onAdded={handleCampaignAdded}
            refresh={refresh} 
            username={username}
            onLogout={handleLogout}
        />
      ) : (
        // Show the Login screen (your desired design) when logged out
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
