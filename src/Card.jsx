import { useState } from 'react';

export function Card( {catItem, onCardClick} ) {

  // Click handler to notify CardBoard of click event
  const handleClick = () => {
    onCardClick(catItem.id); // Pass the ID of the clicked cat
  };

  return (
    <div className=
    "bg-white border border-gray-400 rounded-lg shadow p-2 w-48 h-48 flex justify-center items-center transition duration-700 ease-in-out hover:bg-green-500"
    onClick={handleClick}
    >
      <img
      className="w-full h-full rounded-t-lg"
      src={catItem.url}
      alt={`Cat ${catItem.id}`}
      key={catItem.id}
      />
    </div>
  );
}
