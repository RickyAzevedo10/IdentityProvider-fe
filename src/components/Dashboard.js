import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser, logout } from '../services/authService';

function Dashboard() {
    const [user, setUser] = useState(null);
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUser().then(u => {
            setUser(u);
            if (u?.access_token) {
                fetch('https://localhost:44319/api/profile', {
                    headers: { Authorization: `Bearer ${u.access_token}` }
                })
                    .then(res => {
                        if (!res.ok) throw new Error('API call failed');
                        return res.json();
                    })
                    .then(setApiData)
                    .catch(err => setError(err.message));
            }
        });
    }, []);

    if (!user) {
        return (
            <div className="container">
                <div className="card">
                    <h2>Not authenticated</h2>
                    <p>Please login first.</p>
                    <div className="actions">
                        <Link to="/" className="btn btn-secondary">Back to Home</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-logo">Zirku</Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>Logout</a>
                </div>
            </nav>
            <div className="container">
                <div className="card">
                    <h2>User Info</h2>
                    <ul>
                        <li><strong>Username:</strong> {user.profile.preferred_username || user.profile.sub}</li>
                        <li><strong>Subject:</strong> {user.profile.sub}</li>
                        <li><strong>Scopes:</strong> {user.scope}</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>Protected API Response</h2>
                    {error ? (
                        <div className="error">{error}</div>
                    ) : apiData ? (
                        <pre>{JSON.stringify(apiData, null, 2)}</pre>
                    ) : (
                        <div className="status">Loading...</div>
                    )}
                </div>

                <div className="actions">
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
