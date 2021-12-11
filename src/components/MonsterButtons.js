const MonsterButtons = ({ editMonsterOn, setEditMonsterOn, deleteRecord }) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <button
        className="btn btn-outline-primary mx-1 btn-sm col-5"
        onClick={() => {
          setEditMonsterOn(!editMonsterOn);
        }}
      >
        Edytuj
      </button>
      <button
        className="btn btn-danger mx-1 btn-sm col-5"
        onClick={() => deleteRecord(monster)}
      >
        Usuń
      </button>
    </div>
  );
};

export default MonsterButtons;
