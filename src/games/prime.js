import getRandomNumber from '../utils.js';
import runEngineGame from '../index.js';

const challenge = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const numberPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      return false;
    }
  }
  return true;
};

const runPrimeGame = () => {
  const question = getRandomNumber();
  const correctAnswer = numberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default runPrimeGame;

runEngineGame(runPrimeGame, challenge);
