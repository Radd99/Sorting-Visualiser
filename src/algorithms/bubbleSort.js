import { swapFunction } from "../utils/swapFunction";

// this function takes the array and returns the animations to be performed to sort the array
export const bubbleSort = (array) => {
      let animations = [];
      for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                  // first pair is pushed to change the color when comparing
                  animations.push([j, j + 1]);
                  // second time it is pushed to check whether to swap them or not
                  if (array[j] > array[j + 1]) {
                        array = swapFunction(array, j, j + 1);
                        animations.push([j, j + 1, true]);
                  } else {
                        animations.push([j, j + 1, false]);
                  }
                  // it is pushed again to revert them to original color after comparision
                  animations.push([j, j + 1]);
            }
      }
      return animations;
};
