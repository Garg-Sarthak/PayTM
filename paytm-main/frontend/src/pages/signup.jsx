import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button2 from "../components/Button2";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios";

export default function Signup(){
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg p-2 bg-white w-80">
                <Heading text={"Sign up"}></Heading>
                <Subheading text={"Enter your information to create an account"}></Subheading>

                <InputBox text = {"First Name"} inputValue={"John"} onChange={ e => {
                    setFirstName(e.target.value);
                    // console.log(firstName);
                }}></InputBox>
                <InputBox text = {"Last Name"} inputValue={"Doe"} onChange={ e => {
                    setLastName(e.target.value);}}></InputBox>
                <InputBox text = {"Email"} inputValue={"x@y.com"} onChange={e => {
                    setUsername(e.target.value);
                }}></InputBox>
                <InputBox inputValue = {"123456"} text = {"Password"} onChange={e=>{
                    setPassword(e.target.value);
                    // console.log(password);
                }}></InputBox>
                <Button2 text = {"Sign Up"} onClick={()=>{
                    console.log(password);
                    axios.post("http://localhost:3000/api/v1/user/signup",{
                        username,
                        firstName,
                        lastName,
                        password
                    })
                }}></Button2> 
                <BottomWarning text = {"Alreay have an account?"} textU={"Sign In"} link={"https://www.google.com"}></BottomWarning>
            </div>
        </div>
    </div>
    
}