import readlineSync from 'readline-sync';
import isNumberRandom from '../random.js';

const numberTestPrime = (number) => {
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

const numberPrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const numberAttempts = 3;

  for (let i = 1; i <= numberAttempts; i += 1) {
    const numberOne = isNumberRandom();

    const numberTestResult = numberTestPrime(numberOne);

    const userCorrectAnswer = numberTestResult ? 'yes' : 'no';

    console.log(`Question: ${numberOne}`);
    const userQuestionNumber = readlineSync.question('Your answer: ');
    if (userQuestionNumber !== userCorrectAnswer) {
      console.log(`${userQuestionNumber} is wrong answer ;(. Correct answer was ${userCorrectAnswer}\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default numberPrime;
