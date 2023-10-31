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

export default function form({fields, size}){
    return(
        <>
        <form className="container p-[10px] w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded ">
        <div className="flex justify-center">
            <div className="container w-5/6 ">
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