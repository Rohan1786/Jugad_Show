import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './Components/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Renders at /app/ */}
        <Route path="/About" element={<About />} /> {/* Renders at /app/ */}
        <Route path="/Help" element={<About />} /> {/* Renders at /app/ */}
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
);
