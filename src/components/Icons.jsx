
function Icons({children, text, color, ...props}){
    return(
        <>
            <button className="grid grid-row rounded-lg text-white bg-indigo-800"  {...props}>
                {children}
                <span>{text}</span>
            </button>
        </>
    );
}
export default Icons