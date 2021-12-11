import Monster from "./Monster";
import { useContext, useState } from "react";
import { ToolbarContext } from "../context/ToolbarContext";
import useRequestRest from "../hooks/useRequestRest";
import AddMonster from "./AddMonster";

const Monsters = () => {
  const { sortingValue, searchQuery, adding } = useContext(ToolbarContext);
  const { data: monstersData, insertRecord, deleteRecord } = useRequestRest();
  const compare = (a, b) => {
    if (sortingValue === "name") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    if (sortingValue === "level") {
      if (+a.level < +b.level) {
        return -1;
      }
      if (+a.level > +b.level) {
        return 1;
      }
      return 0;
    }
    if (sortingValue === "treasures") {
      if (a.treasures < b.treasures) {
        return -1;
      }
      if (a.treasures > b.treasures) {
        return 1;
      }
      return 0;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-wrap justify-content-around text-center">
          {adding ? <AddMonster insertRecord={insertRecord} /> : null}
          {monstersData
            .filter((monster) =>
              monster.name.toLowerCase().includes(searchQuery)
            )
            .sort(compare)
            .map((monster) => {
              return (
                <Monster
                  monster={monster}
                  key={monster.id}
                  deleteRecord={deleteRecord}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Monsters;
