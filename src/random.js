const numberRandom = (max = 0, min = 100) => {
  const numberResult = Math.floor(Math.random() * (max - min + 1) + min);
  return numberResult;
};

export default numberRandom;
