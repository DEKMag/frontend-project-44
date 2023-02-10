import readlineSync from 'readline-sync';
import { userQuestion, largestDivisor } from '../index.js';
import { numberRandom } from '../random.js';

const largestDivisorGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = userQuestion();
  console.log(`Hello, ${userName}`);

  console.log('Find the greatest common divisor of given numbers.');

  const numberAttempts = 3;

  for (let i = 1; i <= numberAttempts; i += 1) {
    const numberOne = numberRandom();
    const numberTwo = numberRandom();

    const userNumberTest = String(largestDivisor(numberOne, numberTwo));
    const operationProcess = `${numberOne} ${numberTwo}`;
    console.log(`Question: ${operationProcess}`);
    const userQuestionNumber = readlineSync.question('Your answer: ');
    if (userQuestionNumber !== userNumberTest) {
      console.log(`${userQuestionNumber} is wrong answer ;(. Correct answer was ${userNumberTest}\nLet's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default largestDivisorGame;
