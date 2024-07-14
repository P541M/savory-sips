import React from "react";

const WineList = ({ wines }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {wines.length > 0 && (
        <h2 className="text-2xl font-bold mb-7">Wine Recommendations</h2>
      )}
      <div className="w-full flex justify-center">
        <div className="wine-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {wines.length > 0 &&
            wines.map((wine, index) => (
              <div
                key={index}
                className="p-4 text-xl border rounded-2xl bg-[#f6f9ff]"
              >
                <p className="font-bold font-josefin uppercase">{wine}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WineList;

// The wine reco section, this is the thing that holds the wine results