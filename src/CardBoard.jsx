/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import { React, useEffect, useState } from 'react';
import Card from './Card';
import GetCatData from './CatAPI';

// Sample data
const firstCatLoad = [
  {
    id: '4q', url: 'https://cdn2.thecatapi.com/images/4q.jpg', width: 500, height: 409,
  },
  {
    id: '4hg', url: 'https://cdn2.thecatapi.com/images/4hg.gif', width: 300, height: 257,
  },
  {
    id: '4pv', url: 'https://cdn2.thecatapi.com/images/4pv.gif', width: 500, height: 281,
  },
  {
    id: '5n6', url: 'https://cdn2.thecatapi.com/images/5n6.jpg', width: 900, height: 517,
  },
  {
    id: 'aqn', url: 'https://cdn2.thecatapi.com/images/aqn.jpg', width: 594, height: 900,
  },
  {
    id: 'b2s', url: 'https://cdn2.thecatapi.com/images/b2s.jpg', width: 768, height: 1024,
  },
  {
    id: 'ben', url: 'https://cdn2.thecatapi.com/images/ben.jpg', width: 500, height: 333,
  },
  {
    id: 'MTYzNDQ0OA', url: 'https://cdn2.thecatapi.com/images/MTYzNDQ0OA.jpg', width: 504, height: 670,
  },
  {
    id: 'TuXvdAni3', url: 'https://cdn2.thecatapi.com/images/TuXvdAni3.jpg', width: 1500, height: 895,
  },
  {
    id: 'O4yjcTJOh', url: 'https://cdn2.thecatapi.com/images/O4yjcTJOh.jpg', width: 1080, height: 1350,
  },
];

export default function CardBoard({ increaseScore, decreaseScore, nextRound }) {
  const [cats, setCats] = useState([]);
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

  const handleCardClick = (catId) => {
    if (!clickedCards.includes(catId)) {
      // Add the clicked card's ID to the list of clicked cards
      setClickedCards([...clickedCards, catId]);
      increaseScore();
      if (clickedCards.length === cats.length) {
        console.log('Congratulations! Moving on to the next round.');
        nextRound();
      } else {
        shuffleCards();
      }
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
