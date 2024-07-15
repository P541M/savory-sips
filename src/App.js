import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Content from "./components/Content";
import "./index.css";

function App() {
  const [wines, setWines] = useState([]);

  return (
    <div>
      <LandingPage />
      <Content wines={wines} setWines={setWines} />
    </div>
  );
}

export default App;
