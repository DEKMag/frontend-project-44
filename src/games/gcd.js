import numberRandom from '../utils.js';
import runEngineGames from '../index.js';

const challenge = 'Find the greatest common divisor of given numbers.';

const largestDivisor = (one, two) => {
  let number0ne = Math.abs(one);
  let numberTwo = Math.abs(two);
  while (numberTwo) {
    const result = numberTwo;
    numberTwo = number0ne % numberTwo;
    number0ne = result;
  }
  return number0ne;
};

const startGameGCD = () => {
  const numberOne = numberRandom();
  const numberTwo = numberRandom();

  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(largestDivisor(numberOne, numberTwo));
  return [question, correctAnswer];
};

export default () => runEngineGames(startGameGCD, challenge);
