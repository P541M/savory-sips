import React, { useState } from "react";

const Content = ({ wines, setWines }) => {
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
    <div
      id="content"
      className="w-full flex flex-col items-center justify-center min-h-screen bg-bg text-text"
    >
      <div className="relative w-full flex flex-col items-center justify-center body-font px-8 md:px-20 py-12 lg:py-20 bg-bgContrast min-h-screen">
        <div className="relative text-center max-w-screen-lg mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
            A well-chosen wine can elevate a meal to new heights, enhancing the
            flavors and creating a memorable dining experience. Sommeliers are
            experts in wine pairing, using their extensive knowledge to
            recommend wines that perfectly complement your dish, bringing out
            the best in both the food and the wine.
          </p>
          <hr className="w-full border-t-2 border-primary my-8" />
          <p className="text-sm md:text-base lg:text-lg text-secondary italic mb-12">
            "Wine is the most civilized thing in the world." - Ernest Hemingway
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center w-full max-w-md mx-auto"
          >
            <input
              type="text"
              value={dish}
              onChange={(e) => setDish(e.target.value)}
              placeholder="Enter your dish"
              className="p-3 px-5 border rounded-lg mb-6 font-lora text-lg bg-bg w-full"
            />
            <button
              type="submit"
              className="p-3 px-6 bg-primary text-bg font-bold rounded-lg hover:bg-accent transition w-full"
            >
              Wine Pairing
            </button>
          </form>
          {wines.length > 0 && (
            <div className="wine-results w-full flex flex-col items-center justify-center py-12">
              <h2 className="text-2xl font-bold mb-8">Wine Recommendations</h2>
              <div className="w-full flex justify-center">
                <div className="wine-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {wines.map((wine, index) => (
                    <div
                      key={index}
                      className="p-4 text-xl border rounded-lg bg-bg"
                    >
                      <p className="font-bold font-josefin uppercase">{wine}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
