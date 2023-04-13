export default function LandingButton ({children, action, type}) {
    return(
    <div className="flex justify-center">
    <button onClick={action} type={type} className="w-[60%] h-12 my-2 rounded-lg border-yellow-600 bg-yellow-500 border">
        {children}
    </button>
    </div>
)}