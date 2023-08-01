import isNumberRandom from "../random.js";
import runEngineGames from "../index.js";

const challenge = "What number is missing in the progression?";

const numberOne = isNumberRandom();

const step = 2;
const quantity = 9;

const progression = (number, stepNumber, quantityNumber) => {
  const len = quantityNumber;
  const arr = [];

  arr[0] = number;

  for (let j = 1; j <= len; j += 1) {
    arr[j] = arr[j - 1] + stepNumber;
  }

  return arr;
};

const progressionGames = () => {
  const testNumber = progression(numberOne, step, quantity);
  const numberResultOne = Math.floor(Math.random() * 10);

  const correctAnswer = String(testNumber[numberResultOne]);

  const str = "..";
  testNumber[numberResultOne] = str;

  const question = String(testNumber.join(" "));
  return [question, correctAnswer];
};

export default () => runEngineGames(progressionGames, challenge);
