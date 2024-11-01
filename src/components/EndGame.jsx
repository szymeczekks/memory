import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function EndGame({ winner, onEnd }) {
    return (
        winner && <>
         <p>Koniec gry! Wygrał gracz: {winner}</p>
         <Button onClick={onEnd}>Reset</Button>
        </>
    )
}