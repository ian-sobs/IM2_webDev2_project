export default function reviews(){
    const containerStyle = {
        allWidth: "flex bg-white shadow-lg text-black",
        mobile: "flex-col justify-start w-full p-[20px]",
        sm: "sm:flex-row sm:justify-between sm:p-[30px]"
    }

    return(
        <>
            <div className={`${containerStyle.allWidth} ${containerStyle.mobile} ${containerStyle.sm}`}>
                Reviews
            </div>
        </>
    )
}