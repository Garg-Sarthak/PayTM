
export default function Balance({label,balance}){
    return <div className="flex m-2">
    <div className="font-bold text-lg">
        Your balance
    </div>
    <div className="font-semibold ml-4 text-lg">
        ₹ {balance}
    </div>
</div>
}