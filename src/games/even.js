import { getRandomNumber } from '../utils.js';
import runEngineGame from '../index.js';

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';
const numberEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(0, 100);
  const correctAnswer = numberEven(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const runGameEven = () => runEngineGame(challenge, generateRound);
export default runGameEven;
