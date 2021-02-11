import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
      const {
            randomise,
            initiateBubbleSort,
            initiateInsertionSort,
            initiateHeapSort,
            initiateMergeSort,
            initiateQuickSort,
      } = props;

      return (
            <div className="nav">
                  <h2 className="heading">Sorting Visualiser</h2>

                  <button className="buttons" onClick={randomise}>
                        Randomise
                  </button>
                  <button className="buttons" onClick={initiateBubbleSort}>
                        Bubble Sort
                  </button>
                  <button className="buttons" onClick={initiateInsertionSort}>
                        Insertion Sort
                  </button>
                  <button className="buttons" onClick={initiateHeapSort}>
                        Heap Sort
                  </button>
                  <button className="buttons" onClick={initiateMergeSort}>
                        Merge Sort
                  </button>
                  <button className="buttons" onClick={initiateQuickSort}>
                        Quick Sort
                  </button>
            </div>
      );
};

export default Navbar;
