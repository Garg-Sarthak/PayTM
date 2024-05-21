export default function AppBar({label,iconLetter}){
    return <div className="flex flex-row place-content-between shadow-md m-2">
        <div className="m-2">{label}</div>
        <div className="flex flex-row items-center m-2">
            Hello
            <div className="border rounded-full px-3 py-1 bg-slate-200 mx-2 font-semibold text-lg"> {iconLetter}</div>
        </div>
    </div>
}