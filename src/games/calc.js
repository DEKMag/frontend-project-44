import isNumberRandom from '../random.js';
import runEngineGames from '../index.js';

const operationRandom = () => {
  const arrayOperation = ['+', '*', '-'];
  return arrayOperation[Math.floor(Math.random() * arrayOperation.length)];
};
const challenge = 'What is the result of the expression?';

const mathematicsExamination = (numberOne, numberTwo, operationOption) => {
  switch (operationOption) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      throw new Error('You made a mistake!');
  }
};

const isCalculator = () => {
  const numberOne = isNumberRandom();
  const numberTwo = isNumberRandom();
  const operationOption = operationRandom();

  const question = `${numberOne} ${operationOption} ${numberTwo}`;

  // prettier-ignore
  const correctAnswer = mathematicsExamination(numberOne, numberTwo, operationOption).String();
  return [question, correctAnswer];
};

export default () => runEngineGames(isCalculator, challenge);
