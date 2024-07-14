import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full my-8 justify-center">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-4xl font-bold mr-4">SAVORY</h1>
        <img
          src={logo}
          alt="SavorySips Logo"
          style={{ width: "115px", height: "125px" }}
        />
        <h1 className="text-4xl font-bold ml-4">SIPS</h1>
      </div>
    </div>
  );
};

export default Header;

// header
