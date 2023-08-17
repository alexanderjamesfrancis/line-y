import FrontButton from "@/componants/buttons/FrontButton"
import Title from "@/componants/constants/Title"
import SessionForm from "@/componants/forms/SessionForm"
import { useState, useEffect } from "react"


export default function Home() {

  

  const [sessionDisplay, setSessionDisplay] = useState("")

  const test = (e) => {
    console.log("Click")
  }

  const handleClick = (e) =>{
    setSessionDisplay(e.target.value)
  }

  return (
    <div className="flex flex-col items-center bg-blue-300 h-screen ">
      <div className="mt-20">
        <Title />
        <div className="flex flex-col items-center">
          <FrontButton onClick={handleClick} value="NewSession" >New Session</FrontButton>
          <FrontButton onClick={handleClick} value="JoinSession">Join Session</FrontButton>
          <SessionForm display ={sessionDisplay} />
        </div>
        
      </div>
     
    </div>
  

  )
}
