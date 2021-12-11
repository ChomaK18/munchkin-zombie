import { useContext } from "react";
import { ToolbarContext } from "../context/ToolbarContext";

const CardFilter = () => {
  const { searchQuery, setSearchQuery } = useContext(ToolbarContext);
  return (
    <div className="m-2">
      <input
        className="form-control"
        type="text"
        placeholder="Search name..."
        onChange={(e) => {
          setSearchQuery(e.target.value.toLowerCase());
        }}
      ></input>
    </div>
  );
};

export default CardFilter;
