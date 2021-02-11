export function mergeSort(array) {
      const animations = [];
      if (array.length <= 1) return array;
      const copyArray = array.slice();
      mergeSortHelper(array, 0, array.length - 1, copyArray, animations);
      return animations;
}

// this function divides the array to 2 parts and then merges them by calling merge function
function mergeSortHelper(array, startIdx, endIdx, copyArray, animations) {
      if (startIdx === endIdx) return;
      const midIdx = Math.floor((startIdx + endIdx) / 2);
      mergeSortHelper(copyArray, startIdx, midIdx, array, animations);
      mergeSortHelper(copyArray, midIdx + 1, endIdx, array, animations);
      mergeArrays(array, startIdx, midIdx, endIdx, copyArray, animations);
}

// this function merges two arrays, all the while adding pairs to animations
function mergeArrays(array, startIdx, midIdx, endIdx, copyArray, animations) {
      let k = startIdx;
      let i = startIdx;
      let j = midIdx + 1;
      while (i <= midIdx && j <= endIdx) {
            animations.push([i, j, startIdx, endIdx]);
            animations.push([i, j, startIdx, endIdx]);
            // third array is pushed to animations array to know which value to put in the kth position of the main array
            if (copyArray[i] <= copyArray[j]) {
                  animations.push([k, copyArray[i], startIdx, endIdx]);
                  array[k++] = copyArray[i++];
            } else {
                  animations.push([k, copyArray[j], startIdx, endIdx]);
                  array[k++] = copyArray[j++];
            }
      }

      while (i <= midIdx) {
            animations.push([i, i, startIdx, endIdx]);
            animations.push([i, i, startIdx, endIdx]);
            animations.push([k, copyArray[i], startIdx, endIdx]);
            array[k++] = copyArray[i++];
      }
      while (j <= endIdx) {
            animations.push([j, j, startIdx, endIdx]);
            animations.push([j, j, startIdx, endIdx]);
            animations.push([k, copyArray[j], startIdx, endIdx]);
            array[k++] = copyArray[j++];
      }
}
