import { useState } from "react"
import FrontButton from "../buttons/FrontButton"
import Input from "../inputs/Input"


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