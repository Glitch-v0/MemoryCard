import { useState } from 'react';
import { CardBoard } from './CardBoard';
import { ScoreBoard } from './ScoreBoard';

export function GameBoard() {
    const [score, setScore] = useState(0)
    const [round, nextRound] = useState(1)

    const increaseScore = () => {
        setScore(score + 1);
    };

    const decreaseScore = () => {
        setScore(score - 1);
    };

    return (
        <div>
            <ScoreBoard score={score} round={round} />
            <CardBoard increaseScore={increaseScore} decreaseScore={decreaseScore} nextRound={nextRound} />
        </div>
    );
}
