import { useState } from "react";
import Card from "./Card";

export default function Playground({setPlayers, setCards, cards}) {
    const [wanted, setWanted] = useState('');
    const [isClickingAllowed, setIsClickingAllowed] = useState(true);

    function handleScore(isEqual) {
        setTimeout(() => {
            setCards((prevCards) => prevCards.map((card) => {
                if( card.active !== true ) return card;
                return {...card, active: false, found: isEqual ? true : false}
            }));
            setPlayers((prevPlayers) => prevPlayers.map((player) => {
                if( player.active !== true ) return {...player, active: isEqual ? false : true};
                return {...player, active: isEqual ? true : false, score: isEqual ? player.score + 1 : player.score}
            }));
            setIsClickingAllowed(true);
        }, isEqual ? 200 : 2000);
    }

    function compareCards(sign) {
        setIsClickingAllowed(false);
        handleScore(sign === wanted);
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