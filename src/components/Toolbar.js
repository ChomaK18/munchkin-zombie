import { useContext } from "react";
import { ToolbarContext } from "../context/ToolbarContext";
import CardFilter from "./CardFilter";
import Dice from "./Dice";
import SortingValue from "./SortingValue";
import ToolbarButton from "./ToolbarButton";

const Toolbar = () => {
  const { adding, setAdding, editing, setEditing } = useContext(ToolbarContext);
  return (
    <div className="row ">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <SortingValue />
        <CardFilter />
        <ToolbarButton
          label={"Dodawanie potworów"}
          action={adding}
          setAction={setAdding}
        />
        <ToolbarButton
          label={"Edycja potworów"}
          action={editing}
          setAction={setEditing}
        />
      </div>
    </div>
  );
};

export default Toolbar;
