import React, { useState } from 'react';
import WinePairingForm from './components/WinePairingForm';
import WineList from './components/WineList';
import './App.css';  // Ensure you have a custom CSS file for styling if needed

function App() {
  const [wines, setWines] = useState([]);

  return (
    <div className="App">
      <WinePairingForm setWines={setWines} />
      <WineList wines={wines} />
    </div>
  );
}

export default App;
