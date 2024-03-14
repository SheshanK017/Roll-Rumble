import React, { useState } from "react";
import "./App.css";

function Next() {
  const [selectednumber, setselectednumber] = useState();
  const [sccore, setsccore] = useState(0);

  const [currentDice, setCurrentDice] = useState(1);
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
    // const pict="/images/dice_"+t+".png";
  };
  const rolldice = () => {
    const randomNumber = generateRandomNumber();
    setCurrentDice((prev) => randomNumber);

    if (randomNumber == selectednumber) {
      setsccore((prev) => prev + randomNumber);
    } else {
      setsccore((prev) => prev - 2);
    }
  };

  const ba = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="score">
        <h1 className="sn1">SCORE : </h1>
        <h1 className="sn">{sccore}</h1>
      </div>
      <div className="cen">
        <div className="dice11">
          <div className="imp" id="q" onClick={rolldice}>
            <img src={` /images/dice_${currentDice}.png`} alt="logo" />
          </div>

          <h2> Click on dice to roll</h2>
        </div>
        <div className="Buttons">
          <div className="but2">
            <button className="reset aaa" onClick={ba}>
              Reset Score
            </button>
          </div>
        </div>
      </div>

      <div className="Number">
        <button className="n 1" onClick={() => setselectednumber(1)}>
          1
        </button>
        <button className="n 2" onClick={() => setselectednumber(2)}>
          2
        </button>
        <button className="n 3" onClick={() => setselectednumber(3)}>
          3
        </button>
        <button className="n 4" onClick={() => setselectednumber(4)}>
          4
        </button>
        <button className="n 5" onClick={() => setselectednumber(5)}>
          5
        </button>
        <button className="n 6" onClick={() => setselectednumber(6)}>
          6
        </button>
        <p className="t">
          <b>Select Number</b>
        </p>
      </div>
    </>
  );
}

export default Next;
