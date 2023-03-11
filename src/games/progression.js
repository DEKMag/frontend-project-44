import readlineSync from 'readline-sync';
import isNumberRandom from '../random.js';

const progressionGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log('What number is missing in the progression?');

  const numberAttempts = 3;

  for (let i = 1; i <= numberAttempts; i += 1) {
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

    const testNumber = progression(numberOne, step, quantity);
    const numberResultOne = Math.floor(Math.random() * 10);

    const testNumberResultStr = String(testNumber[numberResultOne]);

    const str = '..';
    testNumber[numberResultOne] = str;
    const resultStr = String(testNumber.join(' '));

    console.log(`Question: ${resultStr}`);
    const userQuestionNumber = readlineSync.question('Your answer: ');
    if (userQuestionNumber !== testNumberResultStr) {
      console.log(`${userQuestionNumber} is wrong answer ;(. Correct answer was ${testNumberResultStr}\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default progressionGames;
