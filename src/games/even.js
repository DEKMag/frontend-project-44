import isNumberRandom from "../random.js";
import runEngineGames from "../index.js";

const challenge = "What is the result of the expression?";

const isNumberEven = (number) => number % 2 === 0;

const userPlayGames = () => {
  const question = isNumberRandom();

  const correctAnswer = isNumberEven(question) ? "yes" : "no";
  return [question, correctAnswer];
};

export default () => runEngineGames(userPlayGames, challenge);
