import React from 'react';

export default function ScoreBoard({ round, score }) {
  return (
    <div className="flex place-content-center justify-around">
      <h1>
        Current Round:
        {round}
      </h1>
      <h1>
        Your Score:
        {score}
      </h1>
    </div>
  );
}
