import { useState } from "react"
import FrontButton from "../buttons/FrontButton"
import Input from "../inputs/Input"
// import createNewSession from "@/pages/api/db/createNewSession"


export default function NewSessionForm(){

    const [userName,setUserName] = useState("")
    const [lineName,setLineName] = useState("")

    const handleNewForm = (e) =>{
        e.preventDefault()
        newSession = {
            userName,
            lineName
        }
        createNewSession(newSession)
        
        
        
    }

    return(
        <div>
            <form className="flex flex-col items-center" onSubmit={handleNewForm}>
                <div className="flex flex-col items-center">
                    <label>Username</label>
                    <Input type="text" value={userName} onChange={(e) =>{
                        setUserName(e.target.value)
                    }}  />
                </div>
                <div className="flex flex-col items-center">
                    <label>Line Name:</label>
                    <Input type="text" value={lineName} onChange={(e) =>{
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