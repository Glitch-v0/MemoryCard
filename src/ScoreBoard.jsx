export function ScoreBoard({round, score}){
    return (
    <div className='grid place-content-center'>
        <h1>Current Round: {round}</h1>
        <h1>Your Score: {score}</h1>
    </div>
    )
}