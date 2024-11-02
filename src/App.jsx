import { useEffect, useState } from "react"
import Player from "./components/Player"
import Playground from "./components/Playground";
import Score from "./components/Score";
import EndGame from "./components/EndGame";
import PairsSetter from "./components/PairsSetter";
import getSigns from "./utils/signs";
import shuffle from "./utils/shuffle";
import getPlayers from "./utils/players";

function App() {
  const [numberOfPairs, setNumberOfPairs] = useState(6);
  const [winner, setWinner] = useState(null)
  const [players, setPlayers] = useState(getPlayers());
  const [cards, setCards] = useState([]);

  function randomizeCards() {
    const signs = getSigns();
    let cards = [];
    let id = 0;
    for (let i = 0; i < numberOfPairs; i++) {
      for (let j = 0; j < 2; j++) {
        cards.push({ sign: signs[i], active: false, found: false, id: id });
        id++;
      }
    }
    cards = shuffle(cards);
    return cards;
  }
  
  useEffect(() => {
    setCards(randomizeCards());
  },[])
  
  useEffect(() => {
    setCards(randomizeCards());
    setPlayers(getPlayers());
  },[numberOfPairs])

  function resetGame() {
    setCards(randomizeCards());
    setPlayers(getPlayers());
    setWinner(null)
  }

  useEffect(() => {
    const result = players.reduce((acc, current) => acc + current.score, 0);
    numberOfPairs === result && setWinner(players.sort((a,b) => b.score - a.score)[0].id)
  }, [players])

  return (
    <div className="flex max-w-screen-md mx-auto flex-col items-center gap-5 p-7">
      <PairsSetter setter={setNumberOfPairs}/>
      <Player players={players}/>
      <Playground setPlayers={setPlayers} cards={cards} setCards={setCards}/>
      <EndGame onEnd={resetGame} winner={winner}/>
      {players.map( ({id, score}) => <Score key={id} player={id} score={score}/>)}
    </div>
  )
}

export default App
