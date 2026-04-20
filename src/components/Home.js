import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { login, getUser, logout } from '../services/authService';

function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser().then(u => setUser(u));
    }, []);

    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-logo">Identity</Link>
                <div className="nav-links">
                    {user ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <a href="#" onClick={(e) => { e.preventDefault(); login(); }}>
                            Login
                        </a>
                    )}
                </div>
            </nav>
            <div className="container">
                <div className="hero">
                    <h1>Identity</h1>
                    <p>OAuth2/OpenID Connect demo with OpenIddict and React</p>
                </div>
                <div className="actions">
                    {user ? (
                        <Link to="/dashboard" className="btn btn-primary">
                            Go to Dashboard
                        </Link>
                    ) : (
                        <button className="btn btn-primary" onClick={login}>
                            Sign In with Identity
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
