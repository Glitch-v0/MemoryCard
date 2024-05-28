import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import CardBoard from './CardBoard';

export default function GameBoard() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    setScore(score - 1);
  };

  const nextRound = () => {
    setRound(round + 1);
  };

  return (
    <div>
      <ScoreBoard score={score} round={round} />
      <CardBoard
        increaseScore={increaseScore}
        decreaseScore={decreaseScore}
        nextRound={nextRound}
      />
    </div>
  );
}
