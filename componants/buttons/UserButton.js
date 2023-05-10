export default function UserButton ({children, ...props}) {
    return(
    
        <button {...props} className="h-12 my-2 rounded-lg border-yellow-600 bg-yellow-500 border">
            {children}
        </button>
    
)} 