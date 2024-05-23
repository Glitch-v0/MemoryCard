export function Card( {catItem, onCardClick} ) {

  // Click handler to notify CardBoard of click event
  const handleClick = () => {
    onCardClick(catItem.id); // Pass the ID of the clicked cat
  };

  return (
    <div className=
    "bg-white border border-gray-400 rounded-lg p-2 w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32  flex justify-center items-center transition duration-500 ease-in-out hover:bg-green-500"
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
