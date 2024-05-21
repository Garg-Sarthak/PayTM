export default function Button2({text,onClick}){
    return <div>
        <button className="mt-6 w-full pt-2 pb-2 pr-4 pl-4 bg-slate-950/85 text-white rounded-md" onClick={onClick}>{text}</button>
    </div>
} 