import React, { useEffect } from 'react';
import { userManager } from '../services/authService';

function Callback() {
    useEffect(() => {
        userManager.signinCallback()
            .then(() => window.location.replace('/'))
            .catch(err => {
                console.error('Callback error:', err);
                window.location.replace('/?error=login_failed');
            });
    }, []);

    return (
        <div className="container">
            <div className="status">Processing login...</div>
        </div>
    );
}

export default Callback;
