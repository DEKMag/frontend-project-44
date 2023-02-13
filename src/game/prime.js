import readlineSync from 'readline-sync';
import { userQuestion, numberTestPrime } from '../index.js';
import { numberRandom } from '../random.js';

const numberPrime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = userQuestion();
  console.log(`Hello, ${userName}`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const numberAttempts = 3;

  for (let i = 1; i <= numberAttempts; i += 1) {
    const numberOne = numberRandom();

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
