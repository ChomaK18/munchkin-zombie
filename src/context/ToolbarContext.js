import { createContext, useState } from "react";
import useCardFilter from "../hooks/useCardFilter";
import useSortingValue from "../hooks/useSortingValue";

const ToolbarContext = createContext();

const ToolbarProvider = ({ children, startingSortingValue = "name" }) => {
  const { sortingValue, setSortingValue, SORTING_VALUES } =
    useSortingValue(startingSortingValue);
  const { searchQuery, setSearchQuery } = useCardFilter();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  return (
    <ToolbarContext.Provider
      value={{
        sortingValue,
        setSortingValue,
        SORTING_VALUES,
        searchQuery,
        setSearchQuery,
        adding,
        setAdding,
        editing,
        setEditing
      }}
    >
      {children}
    </ToolbarContext.Provider>
  );
};

export { ToolbarProvider, ToolbarContext };
