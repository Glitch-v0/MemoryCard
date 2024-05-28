import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import CardBoard from './CardBoard';
import NextRoundMessage from './NextRoundMessage';

export default function GameBoard() {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [nextRoundDisplayed, setNextRoundDisplayed] = useState(false);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    setScore(score - 1);
  };

  const nextRound = () => {
    setRound(round + 1);
    setNextRoundDisplayed(true);
  };

  return (
    <div>
      <ScoreBoard score={score} round={round} />
      {nextRoundDisplayed && (
      <NextRoundMessage
        setNextRoundDisplayed={setNextRoundDisplayed}
        round={round}
      />
      )}
      <CardBoard
        increaseScore={increaseScore}
        decreaseScore={decreaseScore}
        nextRound={nextRound}
      />
    </div>
  );
}
