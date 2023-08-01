import isNumberRandom from '../random.js';
import runEngineGames from '../index.js';

// const arrayOperation = ['+', '*', '-'];

const operationRandom = () => {
  const arrayOperation = ['+', '*', '-'];
  return arrayOperation[Math.floor(Math.random() * arrayOperation.length)];
};
const challenge = 'What is the result of the expression?';

const mathematicsExamination = (numberOne, numberTwo, operator) => {
  let resultAnswer;
  switch (operator) {
    case '+':
      resultAnswer = numberOne + numberTwo;
      break;
    case '-':
      resultAnswer = numberOne - numberTwo;
      break;
    case '*':
      resultAnswer = numberOne * numberTwo;
      break;
    default:
      break;
  }
  return resultAnswer;
};

const isCalculator = () => {
  const numberOne = isNumberRandom();
  const numberTwo = isNumberRandom();
  const operator = operationRandom();
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;

  // prettier-ignore
  const correctAnswer = mathematicsExamination(numberOne, numberTwo, operator).toString();
  return [question, correctAnswer];
};

export default () => runEngineGames(isCalculator, challenge);
