import numberRandom from '../src/random.js';

export const userTestNumber = () => {
  const numGetRondom = numberRandom();
  const numberTest = numGetRondom % 2 === 0;
  return numberTest;
};
