import readlineSync from 'readline-sync';
import { numberRandom } from '../src/random.js';

const userQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const userTestNumber = () => {
  const numGetRondom = numberRandom();
  const numberTest = numGetRondom % 2 === 0;
  return numberTest;
};

const mathematicsExamination = (numberOne, numberTwo, operationOption) => {
  switch (operationOption) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default: throw new Error('You made a mistake!');
  }
};

export { userQuestion, userTestNumber, mathematicsExamination };
