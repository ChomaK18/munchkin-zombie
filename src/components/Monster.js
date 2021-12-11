import { useContext, useState } from "react";
import { ToolbarContext } from "../context/ToolbarContext";
import EditMonster from "./EditMonster";
import MonsterButtons from "./MonsterButtons";
import Prize from "./Prize";

function Monster({ monster, deleteRecord }) {
  const { editing } = useContext(ToolbarContext);
  const [editMonsterOn, setEditMonsterOn] = useState(false);
  return (
    <div className="row">
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-column justify-content-between border border-5 rounded-3 border-danger m-2 px-1
     monster"
          >
            <div>Poziom: {monster.level}</div>
            <div>
              <h4>{monster.name}</h4>
            </div>
            <div className="description">{monster.desc}</div>
            <div className="description">
              <strong>Marny koniec: </strong>
              {monster.badStuff}
            </div>
            <Prize monster={monster} />
          </div>
          {editing ? (
            <MonsterButtons
              deleteRecord={deleteRecord}
              setEditMonsterOn={setEditMonsterOn}
              editMonsterOn={editMonsterOn}
            />
          ) : null}
        </div>
        {editMonsterOn && editing ? (
          <EditMonster monster={monster} setEditMonsterOn={setEditMonsterOn} />
        ) : null}
      </div>
    </div>
  );
}

export default Monster;
