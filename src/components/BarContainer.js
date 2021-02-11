import React, { useState } from "react";

import "./BarContainer.css";
import Bar from "./Bar";
import Navbar from "./Navbar";
import { generateRandomArray } from "../utils/generateArray";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { swapFunction } from "../utils/swapFunction";
import { heapSort } from "../algorithms/heapSort";
import { mergeSort } from "../algorithms/mergeSort";
import { getQuickSortAnimations } from "../algorithms/quickSort";

function BarContainer() {

      // These are the values which can be adjusted
      const MIN_BAR_HEIGHT = 15;
      const MAX_BAR_HEIGHT = 500;
      const TIME_PER_MOVE = 3;
      const PRIMARY_COLOR = "turquoise";
      const SECONDARY_COLOR = "lightBlue";
      const HIGHLIGHT_COLOR = "deepPink";
      const FINISHED_COLOR = "lightGreen";
      const PIVOT_COLOR = "tomato";

      const [NUMBER_OF_BARS, setNUMBER_OFBARS] = useState(100);
      const [isSorting, setIsSorting] = useState(false);

      const sliderChange = (e) => {
            if (isSorting) return;
            else {
                  setNUMBER_OFBARS(e.target.value);
                  setArray(
                        generateRandomArray(
                              MIN_BAR_HEIGHT,
                              MAX_BAR_HEIGHT,
                              e.target.value
                        )
                  );
                  const bars = document.getElementsByClassName("bar");
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = PRIMARY_COLOR;
                  }
            }
      };

      const [array, setArray] = useState(
            generateRandomArray(MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, NUMBER_OF_BARS)
      );

      const randomise = () => {
            if (isSorting) return;
            if (!isSorting) {
                  setArray(
                        generateRandomArray(
                              MIN_BAR_HEIGHT,
                              MAX_BAR_HEIGHT,
                              NUMBER_OF_BARS
                        )
                  );
                  const bars = document.getElementsByClassName("bar");
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = PRIMARY_COLOR;
                  }
            }
      };

      // this function to animate bubblesort
      const initiateBubbleSort = () => {
            if (isSorting) return;
            setIsSorting(true);
            const animations = bubbleSort([...array]);
            const bars = document.getElementsByClassName("bar");
            const bubbleMultiplier = 0.5;
            for (let i = 0; i < animations.length; i++) {
                  if (i % 3 === 0) {
                        const [firstbar, secondbar] = animations[i];
                        setTimeout(() => {
                              bars[
                                    firstbar
                              ].style.backgroundColor = HIGHLIGHT_COLOR;
                              bars[
                                    secondbar
                              ].style.backgroundColor = HIGHLIGHT_COLOR;
                        }, i * bubbleMultiplier * TIME_PER_MOVE);
                  } else if (i % 3 === 1) {
                        const [firstbar, secondbar, bool] = animations[i];
                        let copyArray = array;
                        if (bool) {
                              setTimeout(() => {
                                    copyArray = swapFunction(
                                          copyArray,
                                          firstbar,
                                          secondbar
                                    );
                                    setArray([...copyArray]);
                              }, i * bubbleMultiplier * TIME_PER_MOVE);
                        }
                  } else {
                        const [firstbar, secondbar] = animations[i];
                        setTimeout(() => {
                              bars[
                                    firstbar
                              ].style.backgroundColor = PRIMARY_COLOR;
                              if (
                                    animations[i + 1] &&
                                    animations[i + 1][0] === 0
                              ) {
                                    bars[
                                          secondbar
                                    ].style.backgroundColor = SECONDARY_COLOR;
                              } else {
                                    bars[
                                          secondbar
                                    ].style.backgroundColor = PRIMARY_COLOR;
                              }
                        }, i * bubbleMultiplier * TIME_PER_MOVE);
                  }
            }
            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = FINISHED_COLOR;
                  }
                  setIsSorting(false);
            }, (animations.length + 100) * bubbleMultiplier * TIME_PER_MOVE);
      };

      const initiateInsertionSort = () => {
            if (isSorting) return;
            setIsSorting(true);
            const animations = insertionSort(array);
            const bars = document.getElementsByClassName("bar");

            for (let i = 0; i < animations.length - 1; i++) {
                  let [firstbar, secondbar] = animations[i];
                  if (i % 2 === 0) {
                        setTimeout(() => {
                              let copyArray = array;

                              bars[
                                    firstbar
                              ].style.backgroundColor = HIGHLIGHT_COLOR;
                              bars[
                                    secondbar
                              ].style.backgroundColor = HIGHLIGHT_COLOR;
                              copyArray = swapFunction(
                                    copyArray,
                                    firstbar,
                                    secondbar
                              );
                              setArray([...copyArray]);
                        }, i * 2 * TIME_PER_MOVE);
                  } else {
                        setTimeout(() => {
                              bars[
                                    firstbar
                              ].style.backgroundColor = SECONDARY_COLOR;
                              bars[
                                    secondbar
                              ].style.backgroundColor = SECONDARY_COLOR;
                        }, i * 2 * TIME_PER_MOVE);
                  }
            }
            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = FINISHED_COLOR;
                  }
                  setIsSorting(false);
            }, (animations.length + 100) * 2 * TIME_PER_MOVE);
      };

      
      const initiateHeapSort = () => {
            if (isSorting) return;
            setIsSorting(true);
            let unsortedArray = [...array];
            const animations = heapSort(unsortedArray);
            const bars = document.getElementsByClassName("bar");

            for (let i = 0; i < animations.length; i++) {
                  if (i % 3 === 0) {
                        const [firstbar, secondbar] = animations[i];
                        setTimeout(() => {
                              bars[
                                    firstbar
                              ].style.backgroundColor = HIGHLIGHT_COLOR;
                              bars[
                                    secondbar
                              ].style.backgroundColor = HIGHLIGHT_COLOR;
                        }, i * TIME_PER_MOVE);
                  } else if (i % 3 === 1) {
                        const [firstbar, secondbar, bool] = animations[i];
                        let copyArray = array;
                        if (bool) {
                              setTimeout(() => {
                                    copyArray = swapFunction(
                                          copyArray,
                                          firstbar,
                                          secondbar
                                    );
                                    setArray([...copyArray]);
                              }, i * TIME_PER_MOVE);
                        }
                  } else {
                        const [firstbar, secondbar] = animations[i];
                        setTimeout(() => {
                              bars[
                                    firstbar
                              ].style.backgroundColor = PRIMARY_COLOR;

                              bars[
                                    secondbar
                              ].style.backgroundColor = PRIMARY_COLOR;

                              if (animations[i][2]) {
                                    bars[
                                          secondbar
                                    ].style.backgroundColor = SECONDARY_COLOR;
                              }
                        }, i * TIME_PER_MOVE);
                  }
            }
            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = FINISHED_COLOR;
                  }
                  setIsSorting(false);
            }, (animations.length + 100) * TIME_PER_MOVE);
      };

      const initiateMergeSort = () => {
            if (isSorting) return;
            setIsSorting(true);
            let unsortedArray = [...array];
            const bars = document.getElementsByClassName("bar");
            let animations = mergeSort(unsortedArray);

            for (let i = 0; i < animations.length; i++) {
                  const isColorChange = i % 3 !== 2;
                  if (isColorChange) {
                        const [
                              barOneIdx,
                              barTwoIdx,
                              startIdx,
                              endIdx,
                        ] = animations[i];
                        const barOneStyle = bars[barOneIdx].style;
                        const barTwoStyle = bars[barTwoIdx].style;
                        setTimeout(() => {
                              barOneStyle.backgroundColor =
                                    i % 3 === 0
                                          ? HIGHLIGHT_COLOR
                                          : PRIMARY_COLOR;
                              barTwoStyle.backgroundColor =
                                    i % 3 === 0
                                          ? HIGHLIGHT_COLOR
                                          : PRIMARY_COLOR;
                              if (
                                    startIdx === 0 &&
                                    endIdx === array.length - 1
                              ) {
                                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                              }
                        }, i * TIME_PER_MOVE);
                  } else {
                        setTimeout(() => {
                              const [barOneIdx, newHeight] = animations[i];
                              const barOneStyle = bars[barOneIdx].style;
                              barOneStyle.height = `${newHeight}px`;
                        }, i * TIME_PER_MOVE);
                  }
            }
            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = SECONDARY_COLOR;
                  }
            }, animations.length * TIME_PER_MOVE);

            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = FINISHED_COLOR;
                  }
                  setIsSorting(false);
            }, (animations.length + 200) * TIME_PER_MOVE);
      };

      const initiateQuickSort = () => {
            if (isSorting) return;
            setIsSorting(true);
            let unsortedArray = [...array];
            const animations = getQuickSortAnimations(unsortedArray);
            const bars = document.getElementsByClassName("bar");

            let multiplier = 2;
            for (let i = 0; i < animations.length; i++) {
                  if (i % 3 === 0) {
                        const [
                              firstbar,
                              secondbar,
                              pivot,
                              isSubtaskCompleted,
                        ] = animations[i];
                        setTimeout(() => {
                              if (isSubtaskCompleted) {
                                    bars[
                                          secondbar
                                    ].style.backgroundColor = SECONDARY_COLOR;
                                    bars[
                                          firstbar
                                    ].style.backgroundColor = HIGHLIGHT_COLOR;
                                    bars[
                                          pivot
                                    ].style.backgroundColor = PIVOT_COLOR;
                              } else {
                                    bars[
                                          secondbar
                                    ].style.backgroundColor = HIGHLIGHT_COLOR;
                                    bars[
                                          firstbar
                                    ].style.backgroundColor = HIGHLIGHT_COLOR;
                                    bars[
                                          pivot
                                    ].style.backgroundColor = PIVOT_COLOR;
                              }
                        }, i * multiplier * TIME_PER_MOVE);
                  } else if (i % 3 === 1) {
                        const [firstbar, secondbar] = animations[i];
                        const bool = animations[i][3];
                        let copyArray = array;
                        if (bool) {
                              setTimeout(() => {
                                    copyArray = swapFunction(
                                          copyArray,
                                          firstbar,
                                          secondbar
                                    );
                                    setArray([...copyArray]);
                              }, i * multiplier * TIME_PER_MOVE);
                        }
                  } else {
                        const [firstbar, secondbar, pivot, bool] = animations[
                              i
                        ];
                        setTimeout(() => {
                              bars[
                                    firstbar
                              ].style.backgroundColor = PRIMARY_COLOR;
                              bars[
                                    secondbar
                              ].style.backgroundColor = PRIMARY_COLOR;
                              if (bool) {
                                    bars[
                                          pivot
                                    ].style.backgroundColor = SECONDARY_COLOR;
                              }
                              for (let k = 0; k < bars.length - 1; k++) {
                                    if (array[k] <= array[k + 1]) {
                                          bars[
                                                k
                                          ].style.backgroundColor = SECONDARY_COLOR;
                                    } else {
                                          break;
                                    }
                              }
                        }, i * multiplier * TIME_PER_MOVE);
                  }
            }
            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = SECONDARY_COLOR;
                  }
            }, animations.length * multiplier * TIME_PER_MOVE);

            setTimeout(() => {
                  for (let i = 0; i < bars.length; i++) {
                        bars[i].style.backgroundColor = FINISHED_COLOR;
                  }
                  setIsSorting(false);
            }, (animations.length + 50) * multiplier * TIME_PER_MOVE);
      };

      return (
            <>
                  <Navbar
                        randomise={randomise}
                        initiateBubbleSort={initiateBubbleSort}
                        initiateInsertionSort={initiateInsertionSort}
                        initiateHeapSort={initiateHeapSort}
                        initiateMergeSort={initiateMergeSort}
                        initiateQuickSort={initiateQuickSort}
                        isSorting={isSorting}
                  />
                  <div className="barContainer">
                        {array.map((height, idx) => (
                              <Bar
                                    height={height}
                                    key={idx}
                                    numberOfBars={NUMBER_OF_BARS}
                              />
                        ))}
                  </div>

                  <div className="slideContainer">
                        <h3 className="label">Change array size:</h3>
                        <input
                              className="slider"
                              type="range"
                              min="50"
                              max="200"
                              value={NUMBER_OF_BARS}
                              name="slider"
                              onChange={sliderChange}
                              disabled={isSorting}
                        />
                  </div>
            </>
      );
}

export default BarContainer;
