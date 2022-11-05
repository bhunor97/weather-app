const randomNumBetweenFunc = (numberBetween) => {
  return Math.floor(Math.random() * (numberBetween - 1 + 1));
};

export default randomNumBetweenFunc;
