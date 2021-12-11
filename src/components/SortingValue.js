import { useContext } from "react";
import { ToolbarContext } from "../context/ToolbarContext";

const SortingValue = () => {
  const { sortingValue, setSortingValue, SORTING_VALUES } =
    useContext(ToolbarContext);

  return (
    <div className="m-2">
      <strong>Sort by: </strong>
      <label>
        <select
          className="form-select"
          value={sortingValue}
          onChange={(e) => setSortingValue(e.target.value)}
        >
          <option value="name">Nazwa</option>
          <option value="level">Poziom</option>
          <option value="treasures">Skarby</option>
        </select>
      </label>
    </div>
  );
};

export default SortingValue;
