import React, { useState, useEffect } from 'react';
import WinePairingForm from './components/WinePairingForm';
import WineList from './components/WineList';
import './index.css'; // Ensure global styles and Tailwind CSS imports are here
import LandingPage from './components/LandingPage';

function App() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      const overlay = document.querySelector('.app-overlay');
      if (overlay) {
        const opacity = Math.min(1, offset / 800);
        overlay.style.background = `linear-gradient(
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, ${opacity}) 100%
        )`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <LandingPage />
      <div className="app-container min-h-screen flex flex-col items-center justify-center text-white relative">
        <div className="app-overlay absolute inset-0 pointer-events-none"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-bold mb-8">SavorySips</h1>
          <WinePairingForm setWines={setWines} />
          <WineList wines={wines} />
        </div>
      </div>
    </div>
  );
}

export default App;