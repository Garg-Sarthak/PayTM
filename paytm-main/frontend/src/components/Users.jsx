import { useEffect, useState } from "react"
import  Button2  from  "./Button2"
import axios from "axios";
import {useNavigate} from "react-router-dom"
export default function Users(){
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk",{
            params :{
                filter : filter
            }
        })
        .then(response => {
            // setUsers(response.data.user);
            setUsers(response.data.users);
            console.log(response.data.users);
        })
    },[filter])

    return <>
    <div className="mx-4 my-2">
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" onChange={e=>{
                setFilter(e.target.value);
            }}></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button2 text={"Send Money"} onClick={(e) => {
                navigate("/send?id="+user.id+"&name="+user.firstName);
            }}/>
        </div>
    </div>
}