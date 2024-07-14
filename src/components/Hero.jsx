import React from "react";
import wineBackground from "../assets/heroimg.jpg";

const Hero = () => {
  return (
    <div
      className="hero-section w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${wineBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "35vh",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: 1 }}
      ></div>
      <div className="relative z-10 text-left text-bg">
        <h2 className="text-4xl md:text-5xl lg:text-7xl mb-2">
          Your Personal Sommelier
        </h2>
        <p className="text-xl md:text-2xl mb-4 body-font">
          <i>Pair your dish with a complimenting wine</i>
        </p>
      </div>
    </div>
  );
};

export default Hero;
