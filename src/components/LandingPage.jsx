import React from "react";
import logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-text text-bg relative">
      {/* Main Content */}
      <div className="relative w-full flex flex-col items-center justify-center body-font px-8 md:px-20 py-12 lg:py-20 min-h-screen">
        <div className="relative text-center max-w-screen-lg mx-auto">
          <div className="flex flex-row items-center justify-center mb-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl header-font">
              SAV
            </h1>
            <div
              className="flex items-center mx-1"
              style={{
                width: "3em",
                height: "3.25em",
              }}
            >
              <img
                src={logo}
                alt="SavorySips Logo"
                className="w-full h-full"
                style={{
                  filter:
                    "brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg)",
                  width: "100%",
                  height: "100%",
                  maxWidth: "4em",
                  maxHeight: "4.25em",
                }}
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl header-font">
              RY SIPS
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-12">
            Discover the perfect wine pairing for any dish, curated by
            technology.
          </p>
          <a
            href="#content"
            className="px-6 py-2 bg-primary text-bg font-bold rounded-lg hover:bg-accent transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
