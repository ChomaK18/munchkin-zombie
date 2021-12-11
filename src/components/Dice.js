import { useEffect, useState } from "react";

const Dice = () => {
  const [currentDice, setCurrentDice] = useState("");

  useEffect(() => {
    rollDice();
  }, []);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(`Result: ${random}`);
    generateDice(random);
  };

  const generateDice = (num) => {
    switch (num) {
      case 1:
        setCurrentDice("one");
        break;
      case 2:
        setCurrentDice("two");
        break;
      case 3:
        setCurrentDice("three");
        break;
      case 4:
        setCurrentDice("four");
        break;
      case 5:
        setCurrentDice("five");
        break;
      case 6:
        setCurrentDice("six");
        break;

      default:
        break;
    }
  };
  return (
    <div className="dice m-2">
      <i className={`fas fa-dice-${currentDice}`} onClick={rollDice}></i>
    </div>
  );
};

export default Dice;
