import { useState } from "react"
import LandingButton from "../buttons/LandingButton"

export default function JoinSessionForm(){

    const [sessionID,setSessionID] = useState("")
    const [userName,setUserName] = useState("")

    return(
        <div>
            <form onSubmit={handleForm}>
            <div>
                    <label>Username:</label>
                    <input type="text" value={userName} onChange={(e) =>{
                        setUserName(e.target.value)
                    }}  />
                </div>
                <div>
                    <label>Session ID:</label>
                    <input type="text" value={sessionID} onChange={(e) =>{
                        setSessionID(e.target.value)
                    }}  />
                </div>
                <LandingButton type="submit">
                    Submit
                </LandingButton>
                <span className="hidden text-red-500 font-semibold">Username or Session ID incorrect</span>
                <p>Note: Data will not persist</p>
                
            </form>
        </div>
    )
    
}