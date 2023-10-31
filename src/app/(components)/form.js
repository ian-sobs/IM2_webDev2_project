function inputField(fields){
    switch(fields.fieldType){
        case "TEXT":
            return <input type="text" name={fields.nameAttr}></input>
        case "SELECT":
            return <select name={fields.nameAttr}></select>
        case "DATE":
            return <input type="date" name={fields.nameAttr}></input>
    }
        
}

export default function form({fields}){

}