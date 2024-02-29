import { useState } from "react";

// square function
const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="bg-white border border-gray-400 rounded h-12 w-12 m-1 leading-9 tex-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

// Board components
const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWiner(squares);
  let status;
  if (winner) {
    status = `winner ${winner}`;
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWiner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  return (
    <>
      <h1 className="text-blue-400 font-semibold">{status}</h1>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

// Main Game
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsnext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  const handlePlay = (nextSquares) => {
    setXIsnext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  // jump history
  const jump = (move) => {
    setCurrentMove(move);
    setXIsnext(move % 2 === 0);
  };

  // history
  const move = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move #${move}`;
    } else {
      description = `Go to Start the Game 🤞`;
    }
    return (
      <li
        key={move}
        className="border bg-slate-300 rounded my-1 px-2 text-lg text-slate-800 font-medium hover:scale-105 duration-300 active:bg-slate-100"
      >
        <button onClick={() => jump(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <h1 className="text-center text-3xl font-bold text-pink-400">
        Wellcome To tic Tac Toe World 🎉
      </h1>
      <div className="sm:flex my-6 sm:my-0 justify-center p-4">
        <div className="border rounded bg-cyan-100 sm:mr-10 p-6 shadow">
          <Board
            xIsNext={xIsNext}
            squares={currentSquare}
            onPlay={handlePlay}
          />
        </div>

        <div className="border rounded p-4">
          <ol>{move}</ol>
        </div>
      </div>
    </>
  );
};
export default Game;

// Calculate Winner
const calculateWiner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
