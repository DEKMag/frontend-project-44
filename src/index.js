import readlineSync from 'readline-sync';
import numberRandom from '../src/random.js';

export const userQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export const userTestNumber = () => {
  const numGetRondom = numberRandom();
  const numberTest = numGetRondom % 2 === 0;
  return numberTest;
};

export const numberTestPrime = (number) => {
  if (number === 1) {
    return false;
  } if (number === 2) {
    return true;
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      return false;
    }
  }
  return true;
};

export const mathematicsExamination = (numberOne, numberTwo, operationOption) => {
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

export const largestDivisor = (one, two) => {
  let number0ne = Math.abs(one);
  let numberTwo = Math.abs(two);
  while (numberTwo) {
    const result = numberTwo;
    numberTwo = number0ne % numberTwo;
    number0ne = result;
  }
  return number0ne;
};

// export default {
//   userQuestion, userTestNumber, mathematicsExamination, largestDivisor, numberTestPrime
// };
