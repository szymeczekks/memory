export default function Card({sign, active, found, isClickingAllowed, onClick}) {
    return (
        <div className={`w-[calc((100%-3*1.75rem)/4)]  bg-blue-500 aspect-square flex justify-center items-center text-4xl rounded-xl cursor-pointer transition-all ${(active || found) ? "bg-slate-500" : ""} ${(active) ? "scale-110" : ""}`} onClick={() => {(!active && !found && isClickingAllowed) && onClick()}}>{(active || found) ? sign : "❓"}</div>
    )
}