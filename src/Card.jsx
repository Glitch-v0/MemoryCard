import { useState } from 'react';

export function Card( {catItem} ) {
  const [currentCat, changeCat] = useState(catItem)
  return (
    <div className="bg-white border border-gray-400 rounded-lg shadow p-2 w-48 h-48 flex justify-center items-center">
      <img
      className="w-full h-full rounded-t-lg"
      src={currentCat.url}
      alt={`Cat ${currentCat.id}`}
      key={currentCat.id}
      />
    </div>
  );
}
