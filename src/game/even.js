import readlineSync from 'readline-sync';
import { numberRandom } from '../random.js';

const userPlayGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  const textTaskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(textTaskMessage);

  const numberAttempts = 3;

  for (let i = 1; i <= numberAttempts; i += 1) {
    const numGetRondom = numberRandom();
    const numberTest = numGetRondom % 2 === 0;

    console.log(`Question: ${numGetRondom}`);
    const userQuestion = readlineSync.question('Your answer: ');
    const userCorrectQuestion = [numGetRondom, userQuestion];

    const userCorrectAnswer = numberTest ? 'yes' : 'no';
    const userCorrect = [numGetRondom, userCorrectAnswer];

    if (userCorrectQuestion[1] !== userCorrect[1]) {
      console.log(`${userCorrectQuestion[1]} is wrong answer ;(. Correct answer was ${userCorrect[1]}.\n Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default userPlayGames;
