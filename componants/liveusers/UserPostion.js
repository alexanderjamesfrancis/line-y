import UserButton from "../buttons/UserButton"

export default function UserPostion({position}){

    const deleteEntry = () =>{
        //Deletes the user from the session
    }

    // This is the box that the user data will display in. This will be stacked on the live feed.

    const [index, name] = position

    return(
        <div className="flex border-2 space-2">
            <div>
                <h6>{name}</h6>
            </div>
            
            <p>{index}</p>
            <UserButton onClick={deleteEntry} >X</UserButton>
        </div>
    )
}