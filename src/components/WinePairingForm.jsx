import React, { useState } from 'react';

const WinePairingForm = ({ setWines }) => {
  const [dish, setDish] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const response = await fetch(`https://api.spoonacular.com/food/wine/pairing?food=${dish}&apiKey=${apiKey}`);
    const data = await response.json();
    setWines(data.pairedWines || []);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <input
        type="text"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        placeholder="Enter your dish"
        className="p-2 border border-gray-300 rounded mr-4"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Get Wine Pairing</button>
    </form>
  );
}

export default WinePairingForm;
