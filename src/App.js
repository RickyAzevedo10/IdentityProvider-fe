import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Callback from './components/Callback';
import SilentCallback from './components/SilentCallback';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/silent-callback" element={<SilentCallback />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
