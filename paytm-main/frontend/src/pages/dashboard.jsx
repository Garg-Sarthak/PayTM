import AppBar from "../components/AppBar";
import Balance from "../components/Balance";

export default function Dashboard(){
    return <div>
        {/* <AppBar labelLeft={"Payments App"} labelRight={"Hello, User"} userSymbol={"U"}/> */}
        <AppBar/>
        <Balance balance={"10000"}/>
    </div>
}