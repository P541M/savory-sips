import React from "react";
import WinePairingForm from "./WinePairingForm";

const Hero = ({ setWines }) => {
  return (
    <section className="container hero-section mb-8">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-7xl font-bold mb-4">Your Personal Sommelier</h2>
          <p className="text-2xl mb-4">
            <i>Pair your dish with a complimenting wine.</i>
          </p>
          <WinePairingForm setWines={setWines} />
        </div>

      </div>
    </section>
  );
};

export default Hero;

// Main section the user sees, this is the slogan section