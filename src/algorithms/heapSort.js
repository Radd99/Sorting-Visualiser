import { swapFunction } from "../utils/swapFunction";

// each pair is pushed three times into animations
// one to change to highlight color
// then to check if they should swap
// then finally to change them to original color

// you can use anything which seems easy and logical to you

let animations = [];
// this function is to check if the node can move upwards (bubbled up)
const bubbleUp = (array, idx) => {
      if (idx === 0) return array;
      let parent;
      if (idx % 2 === 0) {
            parent = idx / 2 - 1;
      } else {
            parent = Math.floor(idx / 2);
      }

      animations.push([idx, parent]);
      if (array[parent] < array[idx]) {
            array = swapFunction(array, parent, idx);
            animations.push([idx, parent, true]);
            animations.push([idx, parent]);
      } else {
            animations.push([idx, parent, false]);
            animations.push([idx, parent]);
            return array;
      }

      return bubbleUp(array, parent);
};

// this array is used to convert a given array to heap
const heapify = (array) => {
      for (let i = 1; i < array.length; i++) {
            array = bubbleUp(array, i);
      }
      return array;
};

// this is a function to check if the node can move downwards (bubbled down)
const bubbleDown = (array, idx, length) => {
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      let largest = idx;

      if (left < length && array[largest] < array[left]) {
            largest = left;
      }
      if (right < length && array[largest] < array[right]) {
            largest = right;
      }

      animations.push([idx, largest]);

      if (largest !== idx) {
            animations.push([idx, largest, true]);
            animations.push([idx, largest]);
            array = swapFunction(array, largest, idx);
            array = bubbleDown(array, largest, length - 1);
      } else {
            animations.push([idx, largest, false]);
            animations.push([idx, largest]);
      }

      return array;
};

export const heapSort = (array) => {
      array = heapify(array);

      for (let i = 0; i < array.length - 1; i++) {
            // the first element is pushed to the end
            animations.push([0, array.length - 1 - i]);
            animations.push([0, array.length - 1 - i, true]);
            animations.push([0, array.length - 1 - i, true]);
            array = swapFunction(array, 0, array.length - 1 - i);

            // the first element is out of order, so bublle down
            array = bubbleDown(array, 0, array.length - i - 1);
      }

      return animations;
};
