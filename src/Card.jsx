import { useState } from 'react';

export function Card( catItem ) {
  const [currentCat, changeCat] = useState(catItem)
  return (
    <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow p-5">
      <img
      className="rounded-t-lg"
      src={currentCat.url}
      alt={`Cat ${currentCat.id}`}
      key={currentCat.id}
      />
    </div>
  );
}
