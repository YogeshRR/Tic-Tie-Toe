import Player from "./component/player";
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name='player 1' symbol='x' />
          <Player name='player 2' symbol='0' />
        </ol>
        GAMES
      </div>
      LOG
    </main>
  );
}

export default App
