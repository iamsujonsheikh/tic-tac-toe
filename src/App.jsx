import { useState } from "react";

// square function
const Square = () => {
  const [value, setValue] = useState(null);
  // handle function
  const handleClick = () => {
    setValue("X");
  };

  return (
    <button
      className="bg-white border border-gray-400 rounded h-12 w-12 m-1 leading-9 tex-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

// main components
const Board = () => {
  return (
    <>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};
export default Board;
