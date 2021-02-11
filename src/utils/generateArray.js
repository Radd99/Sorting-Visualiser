export const generateRandomArray = (min, max, number) => {
  let cur,
    returnArray = [];
  for (let i = 1; i <= number; i++) {
    cur = Math.floor(Math.random() * (max - min)) + min;
    returnArray.push(cur);
  }
  return returnArray;
};
