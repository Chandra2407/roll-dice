import { useState } from "react";
import "./styles.css";

const MAX = 7;
const MIN = 1;

export default function App() {
  const [emptyArray1, setEmptyArray1] = useState([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);
  const [emptyArray2, setEmptyArray2] = useState([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);

  const handleClick = () => {
    let number1 = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    let number2 = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    let arr1 = new Array();
    let arr2 = new Array();

    console.log(arr1, arr2);
    setEmptyArray1((prev) => {
      return createArray(number1);
    });
    setEmptyArray2((prev) => {
      return createArray(number2);
    });
  };

  const diceStyles = {
    width: "100px",
    height: "100px",
    background: "purple",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "20%",
    color: "white",
    gap: "10px",
    flexWrap: "wrap",
    padding: "10px",
  };

  const createArray = (number) => {
    let newArray = [];
    if (number == 1) {
      newArray = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
    }
    if (number == 2) {
      newArray = [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
      ];
    }
    if (number == 3) {
      newArray = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
    }
    if (number == 4) {
      newArray = [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ];
    }
    if (number == 5) {
      newArray = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ];
    }
    if (number == 6) {
      newArray = [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
      ];
    }
    return newArray;
  };

  return (
    <div className="App">
      <section className="dices">
        <div className="dice" style={diceStyles}>
          {emptyArray1.map((arrInside) => {
            return arrInside.map((elem) => {
              if (elem == 1) return <span className="dot one"></span>;
              if (elem == 0) return <span className="dot zero"></span>;
            });
          })}
        </div>
        <div className="dice" style={diceStyles}>
          {emptyArray2.map((arrInside) => {
            return arrInside.map((elem) => {
              if (elem == 1) return <span className="dot one"></span>;
              if (elem == 0) return <span className="dot zero"></span>;
            });
          })}
        </div>
      </section>
      <button className="roll" onClick={handleClick}>
        Roll Dice
      </button>
    </div>
  );
}
