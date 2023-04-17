import { useState } from "react"
import FrontButton from "../buttons/FrontButton"



export default function NewSessionForm(){

    const [userName,setUserName] = useState("")
    const [lineName,setLineName] = useState("")

    const handleNewForm = (e) =>{
        e.preventDefault()
        console.log({userName})
        console.log("This is the new form being submitted")
    }

    return(
        <div>
            <form onSubmit={handleNewForm}>
                <div>
                    <label>Username Name:</label>
                    <input type="text" value={userName} onChange={(e) =>{
                        setUserName(e.target.value)
                    }}  />
                </div>
                <div>
                    <label>Line Name:</label>
                    <input type="text" value={lineName} onChange={(e) =>{
                        setLineName(e.target.value)
                    }}  />
                </div>
                <FrontButton type="submit">
                    Submit
                </FrontButton>
                
            </form>
        </div>
    )
    
}