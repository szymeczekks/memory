import { useState } from "react"
import Player from "./components/Player"
import Playground from "./components/Playground";
import Score from "./components/Score";
import Button from "./components/Button";

function App() {
  const [players, setPlayers] = useState([
    {id: 1, active: true, score: 0},
    {id: 2, active: false, score: 0}
  ]);

  console.log(players);

  function resetGame() {
    alert("RESET");
  }

  return (
    <div className="flex max-w-screen-md mx-auto flex-col items-center gap-5 p-7">
      <Player players={players}/>
      <Playground setPlayers={setPlayers}/>
      <Button onClick={resetGame}>Reset</Button>
      {players.map( ({id, score}) => <Score key={id} player={id} score={score}/>)}
    </div>
  )
}

export default App
