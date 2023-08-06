import numberRandom from '../utils.js';
import runEngineGames from '../index.js';

const challenge = 'Answer "yes" if the number is even, otherwise answer "no"';

const isNumberEven = (number) => number % 2 === 0;

const startEvenGames = () => {
  const question = numberRandom();

  const correctAnswer = isNumberEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runEngineGames(startEvenGames, challenge);
