/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import GetCatData from './CatAPI';
import clickSound from './sounds/click-sound.wav';
import failureSound from './sounds/failure.wav';
import roundCompleteSound from './sounds/positive-sound.wav';


export default function CardBoard({ increaseScore, decreaseScore, nextRound }) {
  const [cats, setCats] = useState([]);
  const [nextCats, setNextCats] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const goodClickSound = new Audio(clickSound);
  const badClickSound = new Audio(failureSound);
  const roundComplete = new Audio(roundCompleteSound);

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
      goodClickSound.play();
      increaseScore();
      setClickedCards((prevClickedCards) => {
        const updatedClickedCards = [...prevClickedCards, catId];
        if (updatedClickedCards.length === cats.length) {
          roundComplete.play();
          nextRound();
          setCats(nextCats);
          setClickedCards([]);
          setNextCats([]);
        } else {
          shuffleCards();
        }

        return updatedClickedCards;
      });
    } else {
      badClickSound.play();
      decreaseScore();
    }
  };

  return (
    <div
      id="cardBoard"
      className="grid place-items-center
    gap-4 sm:gap-6 lg:gap-10 grid-cols-2 grid-rows-5 sm:grid-cols-4 sm:grid-rows-3 lg:grid-cols-5 lg:grid-rows-2
    bg-green-200"
    >
      {cats.map((cat) => (
        <Card key={cat.id} catItem={cat} onCardClick={handleCardClick} />
      ))}
    </div>
  );
}
