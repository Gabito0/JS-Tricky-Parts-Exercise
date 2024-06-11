function guessingGame() {
  const ANSWER = Math.floor(Math.random() * 100);
  let foundTarget = false;
  let amtGuess = 0;
  return function guess(guessNum) {
    if (foundTarget) return "The game is over, you already won!";
    amtGuess++;
    if (guessNum === ANSWER) {
      foundTarget = true;
      const guess = amtGuess === 1 ? "guess" : "guesses";
      return `You win! You found ${ANSWER} in ${amtGuess} ${guess}.`;
    }
    if (guessNum < ANSWER) return `${guessNum} is too low!`;

    if (guessNum > ANSWER) return `${guessNum} is too high!`;
  };
}

module.exports = { guessingGame };

// #########################requirements#########################

// returns a function that allows to guess a random whole number between 0 and 99.
// everytime we create a new game it show select a new random number
// the game ends once you guess the right number
// keeps the targetnum secret from the players
// tell the user whether theyre too low or high or correct

// psuedo code
// let foundTarget = false
// let amtGuess = 0
// return function(numguess){
// const targetNum;
// if(foundTarget)
// return The game is over, you already won.
// amtGuess++
// if targetNum === null;
// targetNum = rand num between 0 and 99
// if(guessNum < 99)
// return  guessNum is too low
// if(guessNum > 99)
// return guessNum is too high
// foundeTarget = true
// return You win! You found targetNum in amtGuess guesses.
// }
