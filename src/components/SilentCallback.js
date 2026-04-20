import React, { useEffect } from 'react';
import { userManager } from '../services/authService';

function SilentCallback() {
    useEffect(() => {
        userManager.signinSilentCallback().catch(console.error);
    }, []);

    return <div>Silent renewal...</div>;
}

export default SilentCallback;
