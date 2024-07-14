import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WineResults from "./components/WineResults";
import "./index.css";

function App() {
  const [wines, setWines] = useState([]);

  return (
    <div>
      <Header />
      <Hero />
      {/* <WineResults wines={wines} setWines={setWines} /> */}
    </div>
  );
}

export default App;
