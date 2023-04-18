import { useState } from "react"
import FrontButton from "../buttons/FrontButton"
import Input from "../inputs/Input"

export default function JoinSessionForm(){

   


    const [sessionID,setSessionID] = useState("")
    const [userName,setUserName] = useState("")

    const handleJoinForm = (e) =>{
        e.preventDefault()
        console.log({userName})
        console.log({sessionID})
        console.log("This is the Join form being submitted")
    }

    return(
        <div>
            <form className="flex flex-col items-center" onSubmit={handleJoinForm}>
            <div className="flex flex-col items-center">
                    <label>Username:</label>
                    <Input type="text" value={userName} onChange={(e) =>{
                        setUserName(e.target.value)
                    }}  />
                </div>
                <div className="flex flex-col items-center">
                    <label>Session ID:</label>
                    <Input type="text" value={sessionID} onChange={(e) =>{
                        setSessionID(e.target.value)
                    }}  />
                </div>
                <FrontButton type="submit">
                    Submit
                </FrontButton>
                <span className="hidden text-red-500 font-semibold">Username or Session ID incorrect</span>
                <p>Note: Data will not persist</p>
                
            </form>
        </div>
    )
    
}