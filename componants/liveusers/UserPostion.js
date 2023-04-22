export default function UserPostion(position){

    const [index, name] = position

    return(
        <div>
            <h6>{name}</h6>
            <p>{index}</p>
        </div>
    )
}