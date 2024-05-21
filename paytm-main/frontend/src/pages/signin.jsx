import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import Button2 from "../components/Button2";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useState } from "react";

export default function Signin(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    return <div className="h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 p-2 h-max px-4">
                <Heading text={"Sign In"}></Heading>
                <Subheading text={"Enter your credentials to access your account"}></Subheading>

                <InputBox type={"text"} text = {"Email"} inputValue={"johndoe@xampl.com"} onChange={e => {
                    setUsername(e.target.value);
                }}/>
                <InputBox type = {"password"}  text = {"Password"} inputValue = {"123456"} onChange={e => {
                    setPassword(e.target.value);
                }}/>
                
                <Button2  text = {"Sign In"} onClick={async () => {
                    console.log(password);
                    console.log(username);
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    })
                    localStorage.setItem("token",response.data.token);
                    localStorage.setItem("username",username);
                    navigate("/dashboard");
                }}></Button2> 
                <BottomWarning text={"Don't have an account?"} textU = {"Sign Up"} link = {"https://www.google.com"} onClick={() => {
                    navigate("/signup");
                }}/>
            </div>
        </div>
    </div> 

    // </div>
    
}