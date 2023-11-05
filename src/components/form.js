
'use client'
function inputField(field, options){
    const styles = "text-black caret-[#9F9F9F] p-[3px] rounded bg-orange-100 focus:outline-none focus:ring-2 ring-[#FFB169] "

    switch(field.fieldType){
        case "H1":
            return(
                <h1 className="text-center text-2xl text-black font-semibold">
                    {field.fieldName}
                </h1>
            )
        case "TEXT":
            return (
            <>
                <label htmlFor={field.nameAttr} className="text-black p-[3px]">{field.fieldName}</label> <br></br>
                <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="text" id={field.nameAttr} name={field.nameAttr}></input>
            </>)
        case "EMAIL":
            return (
            <>
                <label htmlFor={field.nameAttr} className="text-black p-[3px]">{field.fieldName}</label> <br></br>
                <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="email" id={field.nameAttr} name={field.nameAttr}></input>
            </>)
        case "PASSWORD":
            return(
            <>
                <label htmlFor={field.nameAttr} className="text-black p-[3px]">{field.fieldName}</label> <br></br>
                <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="password" id={field.nameAttr} name={field.nameAttr}></input>
            </>)
        case "SELECT":
            return (
            <div className="flex space-x-[7px]">
                <label className="text-black p-[3px]" htmlFor={field.nameAttr}>{field.fieldName}</label>
                <select className={styles + "focus:ring-2 ring-[#FFB169] w-28"} id={field.nameAttr} name={field.nameAttr} defaultValue="">
                    {options}
                </select>
            </div>)
        case "DATE":
            return (
            <div className="flex space-x-[7px]">
                <label className="text-black p-[3px]" htmlFor={field.nameAttr}>{field.fieldName}</label>
                <input className={styles + "focus:ring-2 ring-[#FFB169]"} type="date" id={field.nameAttr} name={field.nameAttr}></input>
            </div>)
        case "SUBMIT":
            return (
            <>
                <div className="flex justify-center">
                    <button className="text-xl w-32 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#DC8ECB] to-[#FFB169]" id={field.nameAttr} name={field.nameAttr} type="submit">{field.fieldName}</button>
                </div>
            </> )
        default:
            return (
            <>
                <h5 className="text-black p-[3px]">{field.fieldName}</h5>
                <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="text"></input>
            </>)
    }
        
}

export default function form({fields, options, action}){
    return(
        <>
        <form className="container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-t-lg" action={action}>
        <div className="flex flex-wrap justify-center">
            <div className="container w-5/6 ">
                {fields.map((field)=>
                    <>
                    <div className="py-[15px] bg-transparent">
                        
                        {inputField(field, options)}
                    </div>
                    </>
                )}
            </div>

        </div>
        </form>
        </>
    )
}