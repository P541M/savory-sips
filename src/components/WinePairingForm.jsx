import React, { useState } from 'react';

function WinePairingForm({ setWines }) {
  const [dish, setDish] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/food/wine/pairing?food=${dish}&apiKey=${apiKey}`);
    const data = await response.json();
    setWines(data.pairedWines || []);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        placeholder="Enter your dish"
      />
      <button type="submit">Get Wine Pairing</button>
    </form>
  );
}

export default WinePairingForm;