import getRandomNumber from '../utils.js';
import runEngineGame from '../index.js';

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';

const isNumberEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  const question = getRandomNumber();

  const correctAnswer = isNumberEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const genarateRaoundEven = () => runEngineGame(challenge, runEvenGame);
export default genarateRaoundEven;
