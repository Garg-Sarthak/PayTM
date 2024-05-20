
// export default function AppBar({labelLeft, labelRight,userSymbol}){
//     return <div className="flex flex-row place-content-between m-4">
//         <div>{labelLeft}</div>
//         <div>
//             <span>{labelRight}</span>
//             <span className="m-4 px-4 py-2 text-lg rounded-full border-slate-100 border bg-slate-100">{userSymbol}</span>
//         </div>
//     </div>
// }

export default function AppBar(){
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}