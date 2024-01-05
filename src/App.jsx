import { useState } from "react";
import Player from "./component/player";
import GameBoard from "./component/GameBoard";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='player 1' symbol='x' isActive={activePlayer === 'X'} />
          <Player initialName='player 2' symbol='0' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App
