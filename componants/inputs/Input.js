export default function Input({children, ...props}){
    return(
        <input className="rounded border" {...props}>{children}</input>
    )
}