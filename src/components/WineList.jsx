import React from 'react';

const WineList = ({ wines }) => {
  return (
    <div className="mt-8">
      {wines.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Recommended Wines:</h2>
          <ul className="list-disc list-inside">
            {wines.map((wine, index) => (
              <li key={index} className="p-2 border-b border-gray-300">{wine}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WineList;
