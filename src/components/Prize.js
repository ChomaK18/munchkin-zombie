const Prize = ({ monster }) => {
  const treasure = (num) => {
    return num === "1"
      ? `${num} Skarb`
      : num > 4
      ? `${num} Skarbów`
      : `${num} Skarby`;
  };

  const levels = (boo) => {
    return boo ? `2 Poziomy` : null;
  };

  return (
    <div className="d-flex justify-content-between m-2 treasures">
      <div>{levels(monster.extraLevel)}</div>
      <div>{treasure(monster.treasures)}</div>
    </div>
  );
};

export default Prize;
