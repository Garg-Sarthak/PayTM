import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard(){
    return <div>
        {/* <AppBar labelLeft={"Payments App"} labelRight={"Hello, User"} userSymbol={"U"}/> */}
        <AppBar label={"PayTM App"} iconLetter={"U"}/>
        <Balance balance={"10000"}/>
        <Users/>
    </div>
}