import readlineSync from 'readline-sync';
import { numberRandom, operationRandom } from '../random.js';

const userQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const userTestNumber = () => {
  const numGetRondom = numberRandom();
  const numberTest = numGetRondom % 2 === 0;
  return numberTest;
};

const mathematicsExamination = () => {
  const numberOptionOne = numberRandom();
  const numberOptionTwo = numberRandom();
  const operationOption = operationRandom();

  let mathematicsResult;

  if (operationOption === '+') {
    const testOne = numberOptionOne + numberOptionTwo;
    mathematicsResult = testOne;
  } else if (operationOption === '-') {
    const testTwo = numberOptionOne - numberOptionTwo;
    mathematicsResult = testTwo;
  } else if (operationOption === '*') {
    const testThree = numberOptionOne * numberOptionTwo;
    mathematicsResult = testThree;
  }
  return mathematicsResult;
};

export { userQuestion, userTestNumber, mathematicsExamination };
