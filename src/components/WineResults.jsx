import React from "react";
import WineList from "./WineList";
import WinePairingForm from "./WinePairingForm";

const WineResults = ({ wines, setWines }) => {
  return (
    <section className="container wine-results mt-10">
      <WinePairingForm setWines={setWines} />
      <WineList wines={wines} />
    </section>
  );
};

export default WineResults;
