
export default function BottomWarning({text,textU,onClick}){
    return <div>
        <span>{text} <u className ={"hover:text-slate-500 cursor-pointer"} onClick={onClick}>{textU}</u></span>
    </div>
}