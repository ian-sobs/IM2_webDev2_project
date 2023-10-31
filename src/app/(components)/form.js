const styles = "text-black caret-[#9F9F9F] p-[3px] rounded bg-orange-100"

function inputField(field){
    switch(field.fieldType){
        case "TEXT":
            return (
            <>
                <h5 className="text-black p-[3px]">{field.fieldName}</h5>
                <input className={styles + " w-full"} type="text" name={field.nameAttr}></input>
            </>)
        case "SELECT":
            return (
            <>
                <h5 className="text-black p-[3px]">{field.fieldName}</h5>
                <select className={styles} name={field.nameAttr}></select>
            </>)
        case "DATE":
            return (
            <>
                <h5 className="text-black p-[3px]">{field.fieldName}</h5>
                <input className={styles} type="date" name={field.nameAttr}></input>
            </>)
        case "SUBMIT":
            return (
            <>
                <div className="flex justify-center">
                    <button className="text-2xl w-32 font-semibold p-[5px] rounded-full text-center bg-amber-500" type="submit">{field.fieldName}</button>
                </div>
            </> )
        default:
            return (
            <>
                <h5 className="text-black p-[3px]">{field.fieldName}</h5>
                <input className={styles + " w-full"} type="text"></input>
            </>)
    }
        
}

export default function form({fields}){
    return(
        <>
        <form>
        <div className="scroll-smooth container p-[10px] align-middle w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/5 xl:w-2/6 bg-gray-50 rounded">
            <div className="container mx-auto w-5/6 ">
                {fields.map((field)=>
                    <>
                    <div className="py-[15px] bg-transparent">
                        
                        {inputField(field)}
                    </div>
                    </>
                )}
            </div>

        </div>
        </form>
        </>
    )
}