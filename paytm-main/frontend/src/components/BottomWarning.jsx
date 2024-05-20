
export default function BottomWarning({text,textU,link}){
    return <div>
        <span>{text} <a href = {link}><u>{textU}</u></a></span>
    </div>
}