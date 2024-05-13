import React, { useState } from "react";
import WinePairingForm from "./components/WinePairingForm";
import WineList from "./components/WineList";
import "./index.css";
import logo from "./assets/logo.png";
import heroLogo from "./assets/logoHero.png";

function App() {
  const [wines, setWines] = useState([]);

  return (
    <div className="app-container flex flex-col items-center justify-center text-center min-h-screen p-4">
      
      <header className="w-full mb-8 fixed-header flex justify-center">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-4xl font-bold mr-2 font-josefin">SAVORY</h1>
          <img
            src={logo}
            alt="SavorySips Logo"
            className="logo mb-4"
            style={{ width: "115px", height: "125px" }}
          />
          <h1 className="text-4xl font-bold ml-2 font-josefin">SIPS</h1>
        </div>
      </header>

      <section className="container hero-section mb-8">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-7xl font-bold mb-4">Your Personal Sommelier</h2>
            <p className="text-2xl mb-4">
              {" "}
              <i>Pair your dish with a complimenting wine.</i>{" "}
            </p>
            <WinePairingForm setWines={setWines} />
          </div>
          <img
            src={heroLogo}
            alt="Hero Logo"
            style={{ width: "600px", height: "600px" }}
          />
        </div>
      </section>

      <section className="container wine-results mt-8">
        <WineList wines={wines} />
      </section>
    </div>
  );
}

export default App;
