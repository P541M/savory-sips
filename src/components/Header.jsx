import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full my-8 flex justify-center font-bold">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Sav</h1>
        <div
          className="flex items-center"
          style={{
            width: "3em", // Default for small screens
            height: "3.25em", // Default for small screens
          }}
        >
          <img
            src={logo}
            alt="SavorySips Logo"
            className="w-full h-full"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "4em", // Maximum width for large screens
              maxHeight: "4.25em", // Maximum height for large screens
            }}
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">ry Sips</h1>
      </div>
    </div>
  );
};

export default Header;
