
export default function InputBox({text,inputValue,type}){
    return <div className="">
        <div className="text-base py-2">{text}</div>
        <input className="w-full border rounded border-gray-300 px-2 py-1" type = "text" defaultValue={inputValue}></input>
    </div>
}