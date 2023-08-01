import isNumberRandom from "../random.js";
import runEngineGames from "../index.js";

const challenge = "Find the greatest common divisor of given numbers.";

const numberTestPrime = (number) => {
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

const numberPrime = () => {
  const question = isNumberRandom();
  const correctAnswer = numberTestPrime(question) ? "yes" : "no";
  return [question, correctAnswer];
};

export default () => runEngineGames(numberPrime, challenge);
