import React, { useState, useEffect } from "react";

const Content = ({ wines, setWines }) => {
  const [dish, setDish] = useState("");
  const [error, setError] = useState("");
  const [newWines, setNewWines] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/wine/pairing?food=${dish}&apiKey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.pairedWines && data.pairedWines.length > 0) {
        setNewWines(data.pairedWines);
        setWines(data.pairedWines);
      } else {
        setWines([]);
        setNewWines([]);
        setError("No wine recommendations found. Please broaden your search.");
      }
    } catch (error) {
      console.error("Error fetching wine pairing:", error);
      setError(
        "An error occurred while fetching wine pairing. Please try again."
      );
    }
  };

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    if (newWines.length > 0) {
      const timer = setTimeout(() => setNewWines([]), 1000);
      return () => clearTimeout(timer);
    }
  }, [newWines]);

  return (
    <div className="flex flex-col min-h-screen bg-bgContrast">
      <div
        id="content"
        className="w-full flex flex-col items-center justify-center flex-grow text-text fade-up"
      >
        <div className="relative w-full flex flex-col items-center justify-center body-font px-8 md:px-20 py-12 lg:py-20">
          <div className="relative text-center max-w-screen-lg mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 fade-up">
              A well-chosen wine can elevate a meal to new heights, enhancing
              the flavors and creating a memorable dining experience. Sommeliers
              are experts in wine pairing, using their extensive knowledge to
              recommend wines that perfectly complement your dish, bringing out
              the best in both the food and the wine.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-secondary italic mb-6 fade-up">
              "Wine is sunlight, held together by water." — Galileo Galilei
            </p>
            <hr className="w-full border-t-1 border-primary my-8 fade-up" />
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center w-full max-w-md mx-auto fade-up"
            >
              <input
                type="text"
                value={dish}
                onChange={(e) => setDish(e.target.value)}
                placeholder="Enter your dish"
                className="p-3 px-5 border rounded-lg mb-6 font-lora text-lg bg-bg w-full fade-up"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-bg font-bold rounded-lg hover:bg-accent transition fade-up"
              >
                Wine Pairing
              </button>
            </form>
            {error && <p className="text-red-500 mt-4 fade-up">{error}</p>}
            <div className="wine-results w-full flex flex-col items-center justify-center py-12">
              <h2 className="text-2xl font-bold mb-4 fade-up">
                Wine Recommendations
              </h2>
              {!wines.length && (
                <p className="text-lg text-gray-600 mb-8 fade-up">
                  Wine pairings will appear here.
                </p>
              )}
              <div className="w-full flex justify-center">
                <div className="wine-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8 fade-up">
                  {wines.map((wine, index) => (
                    <div
                      key={index}
                      className={`p-3 sm:p-4 md:p-4 text-lg sm:text-xl md:text-xl border rounded-lg bg-bg ${
                        newWines.includes(wine) ? "fade-up" : ""
                      }`}
                    >
                      <p className="font-bold header-font">
                        {toTitleCase(wine)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-bg text-text py-4 flex items-center justify-center fade-up">
        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl body-font">
            &copy; {new Date().getFullYear()} Savory Sips
          </p>
          <p className="text-sm body-font mt-1">
            Created by{" "}
            <a
              href="https://github.com/P541M"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-accent"
            >
              Psalm Eleazar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
