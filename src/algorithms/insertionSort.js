import { swapFunction } from "../utils/swapFunction";

// each pair is pushed three times into animations
// one to change to highlight color
// then to check if they should swap
// then finally to change them to original color

// you can use anything which seems easy and logical to you

export const insertionSort = (passedArray) => {
      let array = [...passedArray];
      let animations = [];
      for (let i = 0; i < array.length; i++) {
            let j = i;
            while (j !== 0 && array[j] < array[j - 1]) {
                  animations.push([j, j - 1]);
                  array = swapFunction(array, j, j - 1);
                  animations.push([j, j - 1]);
                  j--;
            }
      }
      return animations;
};
