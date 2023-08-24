import { getRandomNumber } from '../utils.js';
import runEngineGame from '../index.js';

const challenge = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createNumberPrime = (number) => {
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

const generateRound = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = createNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGamePrime = () => runEngineGame(challenge, generateRound);
export default runGamePrime;
