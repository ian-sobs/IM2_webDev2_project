import Form from "../(components)/form";

export default function Login(){
    const fields = [
        {
            fieldName: "Log in",
            nameAttr: "logInHeading",
            fieldType: "H1"
        },
        {
            fieldName: "Email",
            nameAttr: "email",
            fieldType: "TEXT"
        },
        {
            fieldName: "Password",
            nameAttr: "password",
            fieldType: "TEXT"
        },
        {
            fieldName: "Log in",
            nameAttr: "logIn",
            fieldType: "SUBMIT"
        }
    ]

    return(
        <>
        <div className="p-4 h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#DC8ECB] to-[#FFF8BD] via-[#FFB169]">
            <Form fields={fields} ></Form> 
            
        </div>
        </>
    )
}