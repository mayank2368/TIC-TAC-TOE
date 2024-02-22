import "./index.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function TicTacToe() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default TicTacToe;
