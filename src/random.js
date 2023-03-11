const isNumberRandom = (max = 0, min = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default isNumberRandom;
