import { useState } from "react"
import FrontButton from "../buttons/FrontButton"



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
                <FrontButton type="submit">
                    Submit
                </FrontButton>
                
            </form>
        </div>
    )
    
}