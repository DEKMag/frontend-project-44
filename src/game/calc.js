import readlineSync from 'readline-sync';
import { userQuestion, mathematicsExamination } from '../index.js';
import { numberRandom, operationRandom } from '../random.js';

const calculator = () => {
  console.log('Welcome to the Brain Games!');
  const userName = userQuestion();
  console.log(`Hello, ${userName}`);

  console.log('What is the result of the expression?');

  const numberAttempts = 3;

  for (let i = 1; i <= numberAttempts; i += 1) {
    const numberOne = numberRandom();
    const numberTwo = numberRandom();
    const operationOption = operationRandom();

    const userNumberTest = String(mathematicsExamination(numberOne, numberTwo, operationOption));
    console.log(`Question: ${numberOne} ${operationOption} ${numberTwo}`);
    const userQuestionNumber = readlineSync.question('Your answer: ');
    if (userQuestionNumber !== userNumberTest) {
      console.log(`${userQuestionNumber} is wrong answer ;(. Correct answer was ${userNumberTest}\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calculator;
