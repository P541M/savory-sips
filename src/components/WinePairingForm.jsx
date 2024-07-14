import React, { useState } from "react";

const WinePairingForm = ({ setWines }) => {
  const [dish, setDish] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${dish}&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWines(data.pairedWines || []);
    } catch (error) {
      console.error("Error fetching wine pairing:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center">
      <input
        type="text"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        placeholder="Enter your dish"
        className="p-2 px-4 border rounded-2xl mb-4 font-lora text-xl bg-[#f6f9ff]"
      />
      <button
        type="submit"
        className="p-2 px-4 bg-[#1E2B3E] text-[#eceffa] rounded-2xl hover:bg-[#D0B67D] font-josefin"
      >
        Wine Pairing
      </button>
    </form>
  );
};

export default WinePairingForm;

// wine pairing button and input field