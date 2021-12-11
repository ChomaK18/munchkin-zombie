import { useState } from "react";

const useSortingValue = (startingSortingValue) => {
  const [sortingValue, setSortingValue] = useState(startingSortingValue);
  const SORTING_VALUES = ["name", "level", "treasures"];
  return {
    sortingValue,
    setSortingValue,
    SORTING_VALUES,
  };
};

export default useSortingValue;
