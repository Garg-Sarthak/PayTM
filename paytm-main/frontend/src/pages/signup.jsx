import BottomWarning from "../components/BottomWarning";
import Button2 from "../components/Button2";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";

export default function Signup(){
    return <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg p-2 bg-white w-80">
                <Heading text={"Sign up"}></Heading>
                <Subheading text={"Enter your information to create an account"}></Subheading>
                <InputBox type={"text"} text = {"First Name"} inputValue={"John"}></InputBox>
                <InputBox type={"text"} text = {"Last Name"} inputValue={"Doe"}></InputBox>
                <InputBox type={"text"} text = {"Email"} inputValue={"x@y.com"}></InputBox>
                <InputBox type = {"password"} inputValue = {"123456"} text = {"Password"}></InputBox>
                <Button2 text = {"Sign Up"}></Button2> 
                <BottomWarning text = {"Alreay have an account?"} textU={"Sign In"} link={"https://www.google.com"}></BottomWarning>
            </div>
        </div>
    </div>
    
}