// eslint-disable-next-line react/prop-types
export default function Player({players}) {
    const active = players.filter((player) => player.active === true)[0].id
    return <h1 className="font-semibold text-3xl">Ruch gracza {active}</h1>
}