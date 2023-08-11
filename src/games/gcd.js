import getRandomNumber from '../utils.js';
import runEngineGame from '../index.js';

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

const runGCDGame = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();

  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(largestDivisor(numberOne, numberTwo));
  return [question, correctAnswer];
};

const genarateRaoundGCD = () => runEngineGame(challenge, runGCDGame);
export default genarateRaoundGCD;
