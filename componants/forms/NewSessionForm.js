import { useState } from "react"
import LandingButton from "../buttons/LandingButton"

export default function NewSessionForm(){

    const [userName,setUserName] = useState("")

    return(
        <div>
            <form onSubmit={handleForm}>
                <div>
                    <label>Session Name:</label>
                    <input type="text" value={userName} onChange={(e) =>{
                        setUserName(e.target.value)
                    }}  />
                </div>
                <LandingButton type="submit">
                    Submit
                </LandingButton>
                
            </form>
        </div>
    )
    
}