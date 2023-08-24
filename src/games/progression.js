import { getRandomNumber, getRandomIndex } from '../utils.js';
import runEngineGame from '../index.js';

const challenge = 'What number is missing in the progression?';
const quantity = 9;
const cover = '..';

const createProgression = (number, stepNumber, quantityNumber) => {
  const len = quantityNumber;
  const arr = [];
  arr[0] = number;
  for (let j = 1; j <= len; j += 1) {
    arr[j] = arr[j - 1] + stepNumber;
  }
  return arr;
};

const generateRound = () => {
  const step = getRandomNumber(0, 10);
  const start = getRandomNumber();
  const progression = createProgression(start, step, quantity);
  const hiddenNumberIndex = getRandomIndex(progression);
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = cover;
  const question = String(progression.join(' '));
  return [question, correctAnswer];
};

const runGameProgression = () => runEngineGame(challenge, generateRound);
export default runGameProgression;
