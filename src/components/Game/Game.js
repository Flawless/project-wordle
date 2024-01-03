import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput';
import GameField from '../GameField';
import ResultBanner from '../ResultBanner';
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [gameStatus, setGameStatus] = React.useState();
    const [guesses, setGuesses] = React.useState([]);
    const [userInput, setUserInput] = React.useState("");

    function guess(input) {
        const nextGuess = checkGuess(input, answer)
        const nextGuesses = [...guesses, nextGuess]
        setGuesses(nextGuesses)
        if (nextGuess.every(letter => (letter.status == "correct")))
            setGameStatus("win")
        else if (nextGuesses.length == NUM_OF_GUESSES_ALLOWED)
            setGameStatus("lose")
    }


    return (
        <>
            <GameField guesses={guesses} />
            <WordInput onChange={guess} value={userInput} />
            {gameStatus &&
             <ResultBanner
                 result={gameStatus}
                 steps={guesses.length}
                 answer={answer}
             />}
        </>)
}

export default Game;
