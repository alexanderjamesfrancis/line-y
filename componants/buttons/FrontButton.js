export default function FrontButton ({children, ...props}) {
    return(
    
        <button {...props} className="w-[60%] h-12 my-2 rounded-lg border-yellow-600 bg-yellow-500 border">
            {children}
        </button>
    
)} 