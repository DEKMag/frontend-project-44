import numberRandom from '../random.js';

const userTestNumber = () => {
  const numGetRondom = numberRandom();
  const numberTest = numGetRondom % 2 === 0;
  return numberTest;
};

export default userTestNumber;
