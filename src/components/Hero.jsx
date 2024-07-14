import React from "react";
import wineBackground from "../assets/aboutimg.jpg";

const Hero = () => {
  return (
    <div
      className="hero-section w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${wineBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "55vh",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-60"
        style={{ zIndex: 1 }}
      ></div>
      <div className="relative z-10 text-center text-bg px-8 md:px-20 py-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4">
          Your Personal Sommelier
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 body-font">
          Discover the perfect wine pairing for any dish, curated by experts.
        </p>
        <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
