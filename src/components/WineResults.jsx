import React from "react";
import WineList from "./WineList";

const WineResults = ({ wines }) => {
  return (
    <section className="container wine-results mt-10">
      <WineList wines={wines} />
    </section>
  );
};

export default WineResults;

// The actual output after clicking wine pairing button, the actual wines
