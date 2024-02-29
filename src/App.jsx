import { useState } from "react";

// square function
const Square = ({ value, onSquareClick }) => {
  // handle function

  return (
    <button
      className="bg-white border border-gray-400 rounded h-12 w-12 m-1 leading-9 tex-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

// main components
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    squares[0] = "x";
    setSquares(squares);
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>

      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>

      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
};
export default Board;
