import React from 'react';

function WineList({ wines }) {
  return (
    <div>
      {wines.length > 0 && (
        <div>
          <h2>Recommended Wines:</h2>
          <ul>
            {wines.map((wine, index) => (
              <li key={index}>{wine}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WineList;
