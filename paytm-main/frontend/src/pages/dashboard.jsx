import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

export default function Dashboard(){
    const [balance,setBalance] = useState(0);
    useEffect(function(){
        console.log(localStorage.getItem("username"));
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/v1/account/balance',
            headers: { 
              Authorization : "Bearer "+localStorage.getItem("token"),
              username : localStorage.getItem("username")
            },
          })
          .then(res => setBalance(parseFloat(res.data.balance).toFixed(2)))

    },[balance])
    return <div>
        {/* <AppBar labelLeft={"Payments App"} labelRight={"Hello, User"} userSymbol={"U"}/> */}
        <AppBar label={"PayTM App"} iconLetter={"U"}/>
        <Balance balance={balance}/>
        <Users/>
    </div>
}