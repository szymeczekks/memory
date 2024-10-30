import { useState } from "react";
import Card from "./Card";

export default function Playground({setPlayers}) {
    const [wanted, setWanted] = useState('');
    const [isClickingAllowed, setIsClickingAllowed] = useState(true);
    const [cards, setCards] = useState([
        { sign: "😁", active: false, found: false, id: 1 },
        { sign: "❌", active: false, found: false, id: 10 },
        { sign: "❣", active: false, found: false, id: 6 },
        { sign: "😁", active: false, found: false, id: 3 },
        { sign: "☢", active: false, found: false, id: 11 },
        { sign: "❌", active: false, found: false, id: 5 },
        { sign: "❣", active: false, found: false, id: 7 },
        { sign: "😎", active: false, found: false, id: 4 },
        { sign: "💨", active: false, found: false, id: 8 },
        { sign: "☢", active: false, found: false, id: 9 },
        { sign: "😎", active: false, found: false, id: 2 },
        { sign: "💨", active: false, found: false, id: 12 },
    ]);

    function compareCards(sign) {
        setIsClickingAllowed(false);
        const isEqual = sign === wanted;
        setTimeout(() => {
            setCards((prevCards) => prevCards.map((card) => {
                if( card.active !== true ) return card;
                return {...card, active: false, found: isEqual ? true : false}
            }));
            setIsClickingAllowed(true);
            setPlayers((prevPlayers) => prevPlayers.map((player) => {
                if( player.active !== true ) return {...player, active: true};
                console.log(player.score + 1);
                return {...player, active: false, score: isEqual ? player.score + 1 : player.score}
            }));
        }, 500);
    }

    function handleCardClick(sign, id) {
        setWanted((prevWanted) => prevWanted === '' ? sign : '');
        setCards((prevCards) => prevCards.map((card) => {
            if( card.id !== id ) return card;
            return {...card, active: true}
        }));
        if (wanted) compareCards(sign);
    }

    return (
        <div className="flex flex-wrap gap-7 w-full">
            {cards.map(({sign, active, found, id}) => <Card onClick={() => handleCardClick(sign, id)} isClickingAllowed={isClickingAllowed} key={id} sign={sign} active={active} found={found} />)}
        </div>
    )
}