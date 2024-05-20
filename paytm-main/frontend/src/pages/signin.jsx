import BottomWarning from "../components/BottomWarning";
import Button2 from "../components/Button2";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

export default function Signin(){
    return <div className="h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 p-2 h-max px-4">
                <Heading text={"Sign In"}></Heading>
                <Subheading text={"Enter your credentials to access your account"}></Subheading>
                <InputBox type={"text"} text = {"Email"} inputValue={"johndoe@xampl.com"}></InputBox>
                <InputBox type = {"password"}  text = {"Password"} inputValue = {"123456"}></InputBox>
                <Button2  text = {"Sign In"}></Button2> 
                <BottomWarning text={"Don't have an account?"} textU = {"Sign Up"} link = {"https://www.google.com"}/>
            </div>
        </div>
    </div> 

    // </div>
    
}