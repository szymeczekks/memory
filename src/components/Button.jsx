// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick }) {
    return <button className="bg-fuchsia-500 rounded-lg text-white font-normal px-5 py-1 text-2xl hover:bg-fuchsia-900 transition-colors" onClick={onClick}>{children}</button>
}