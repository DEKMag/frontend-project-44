import { getRandomNumber, getRandomIndex } from '../utils.js';
import runEngineGame from '../index.js';

const operators = ['+', '*', '-'];
const challenge = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Error ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = operators[getRandomIndex(operators)];
  const question = `Question: ${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

const runGameCalc = () => runEngineGame(challenge, generateRound);
export default runGameCalc;
