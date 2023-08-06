import numberRandom from '../utils.js';
import runEngineGames from '../index.js';

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

const startCalculatorGame = () => {
  const numberOne = numberRandom();
  const numberTwo = numberRandom();
  const operator = operationRandom();
  const question = `Question: ${numberOne} ${operator} ${numberTwo}`;

  const correctAnswer = mathematicsExamination(numberOne, numberTwo, operator).toString();
  return [question, correctAnswer];
};

export default () => runEngineGames(startCalculatorGame, challenge);
