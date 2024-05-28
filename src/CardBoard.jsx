/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import GetCatData from './CatAPI';

export default function CardBoard({ increaseScore, decreaseScore, nextRound }) {
  const [cats, setCats] = useState([]);
  const [nextCats, setNextCats] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    // Fetch cat data when the component mounts
    async function fetchCatData() {
      const catData = await GetCatData();
      setCats(catData);
    }
    fetchCatData();
  }, []);

  // Fisher-Yates Shuffle Algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const shuffleCards = () => {
    // Shuffle the cards array
    const shuffledCats = shuffleArray(cats);
    setCats(shuffledCats);
  };

  const handleCardClick = async (catId) => {
    // Fetch next set of cats if not already fetched
    if (nextCats.length === 0) {
      const newCatData = await GetCatData();
      setNextCats(newCatData);
    }
    if (!clickedCards.includes(catId)) {
      setClickedCards((prevClickedCards) => {
        const updatedClickedCards = [...prevClickedCards, catId];
        increaseScore();

        if (updatedClickedCards.length === cats.length) {
          console.log('Congratulations! Moving on to the next round.');
          nextRound();
          setCats(nextCats);
          setClickedCards([]);
          console.log('Clicked cards should be reset.');
          setNextCats([]);
        } else {
          shuffleCards();
        }

        return updatedClickedCards;
      });
    } else {
      decreaseScore();
    }
  };

  return (
    <div
      id="cardBoard"
      className="grid place-items-center
    gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-2 grid-rows-5 sm:grid-cols-4 sm:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2
    bg-green-200"
    >
      {cats.map((cat) => (
        <Card key={cat.id} catItem={cat} onCardClick={handleCardClick} />
      ))}
    </div>
  );
}
