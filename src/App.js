import React, { useState } from "react";
import "./App.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const updatedBoard = [...board];
    updatedBoard[index] = player;
    setBoard(updatedBoard);

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        updatedBoard[a] === player &&
        updatedBoard[b] === player &&
        updatedBoard[c] === player
      ) {
        setWinner(player);
        return;
      }
    }

    if (updatedBoard.every((cell) => cell !== null)) {
      setWinner("Draw");
    }

    setPlayer(player === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  const renderButton = (index) => {
    return (
      <button
        className="cell"
        onClick={() => handleClick(index)}
        disabled={board[index] || winner}
      >
        {board[index]}
      </button>
    );
  };

  const renderStatus = () => {
    if (winner === "Draw") {
      return <p>It's a draw!</p>;
    } else if (winner) {
      return <p>Player {winner} wins!</p>;
    } else {
      return <p>Next Player: {player}</p>;
    }
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <div key={index} className="cell-container">
            {renderButton(index)}
          </div>
        ))}
      </div>
      <div className="status">{renderStatus()}</div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
