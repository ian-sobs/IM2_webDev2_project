function inputField(fields){
    switch(fields.fieldType){
        case "TEXT":
            return <><input className="text-black" type="text" name={fields.nameAttr}></input></>
        case "SELECT":
            return <><select className="text-black" name={fields.nameAttr}></select></>
        case "DATE":
            return <><input className="text-black" type="date" name={fields.nameAttr}></input><br></br></>
        default:
            return <input className="text-black" type="text"></input>
    }
        
}

export default function form({fields}){
    return(
        <>
        <form>
        <div className="container p-[10px] mx-auto align-middle w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/5 xl:w-2/6 bg-gray-50 rounded">
            <div className="container mx-auto w-11/12 ">
                {fields.map((field)=>
                    <>
                    <div className="py-[15px] bg-transparent">
                        <h5 className="text-black">{field.fieldName}</h5>
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