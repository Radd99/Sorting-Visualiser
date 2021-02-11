export const swapFunction = (array, a, b) => {
      let temp = array[b];
      array[b] = array[a];
      array[a] = temp;
      return array;
};
