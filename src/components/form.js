'use client'
// 'use client'
function inputField(field, options){
    const styles = "text-black caret-[#9F9F9F] p-[3px] rounded-sm bg-slate-200 focus:outline-none focus:ring-2 ring-[#FFB169] "

    switch(field.fieldType){
        case "H1":
            return(
                    <div className="py-[15px] bg-transparent">
                        <h1 className="text-center text-2xl text-black font-semibold">
                            {field.fieldName}
                        </h1>
                    </div>
            )
        case "TEXT":
            return (
            <>
                <div className="py-[15px] bg-transparent">
                    <label htmlFor={field.nameAttr} className="text-black p-[3px]">{field.fieldName}</label> <br></br>
                    <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="text" id={field.nameAttr} name={field.nameAttr}></input>
                </div>
            </>)
        case "EMAIL":
            return (
            <>
                <div className="py-[15px] bg-transparent">
                    <label htmlFor={field.nameAttr} className="text-black p-[3px]">{field.fieldName}</label> <br></br>
                    <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="email" id={field.nameAttr} name={field.nameAttr} label={field.label}></input>
                </div>
            </>)
        case "PASSWORD":
            return(
            <>
                <div className="py-[15px] bg-transparent">
                    <label htmlFor={field.nameAttr} className="text-black p-[3px]">{field.fieldName}</label> <br></br>
                    <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="password" id={field.nameAttr} name={field.nameAttr} label={field.label}></input>
                </div>
            </>)
        case "SELECT":
            return (
                <div className="py-[15px] bg-transparent">
                    <div className="flex space-x-[7px]">
                        <label className="text-black p-[3px]" htmlFor={field.nameAttr}>{field.fieldName}</label>
                        <select className={styles + "focus:ring-2 ring-[#FFB169] w-28"} id={field.nameAttr} name={field.nameAttr} defaultValue="">
                            {options}
                        </select>
                    </div>
                </div>)
        case "DATE":
            return (
                <div className="py-[15px] bg-transparent">
                    <div className="flex space-x-[7px]">
                        <label className="text-black p-[3px]" htmlFor={field.nameAttr}>{field.fieldName}</label>
                        <input className={styles + "focus:ring-2 ring-[#FFB169]"} type="date" id={field.nameAttr} name={field.nameAttr}></input>
                    </div>
                </div>
            )
            
        case "SUBMIT":
            return (
            <>
                <div className="py-[15px] bg-transparent">
                    <div className="flex justify-center">
                        <button className="text-xl w-32 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#DC8ECB] to-[#FFB169] text-white" id={field.nameAttr} name={field.nameAttr} type="submit">{field.fieldName}</button>
                    </div>
                </div>
            </> )
        case "hidden":
            return(
                <>
                    
                    <input name={field.nameAttr} type="hidden" value={field.value}></input>
                </>
            )
        default:
            return (
            <>
                <div className="py-[15px] bg-transparent"></div>
                    <h5 className="text-black p-[3px]">{field.fieldName}</h5>
                <input className={styles + " w-full focus:ring-2 ring-[#FFB169]"} type="text"></input>
            </>)
    }
        
}

export default function form({fields, options, action, ...props}){
    
    return(
        <>
        <form {...props} className="container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-t-lg" action={action}>
        <div className="flex flex-wrap justify-center">
            <div className="container w-5/6 ">
                {fields.map((field, index)=>
                    <div key={index}>
                    
                        
                        {inputField(field, options)}
                    
                    </div>
                )}
            </div>

        </div>
        </form>
        </>
    )
}