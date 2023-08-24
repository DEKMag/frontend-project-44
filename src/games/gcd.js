import { getRandomNumber } from '../utils.js';
import runEngineGame from '../index.js';

const challenge = 'Find the greatest common divisor of given numbers.';

const largestDivisor = (one, two) => {
  let number1 = Math.abs(one);
  let number2 = Math.abs(two);
  while (number2) {
    const result = number2;
    number2 = number1 % number2;
    number1 = result;
  }
  return number1;
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(largestDivisor(number1, number2));
  return [question, correctAnswer];
};

const runGameGCD = () => runEngineGame(challenge, generateRound);
export default runGameGCD;
