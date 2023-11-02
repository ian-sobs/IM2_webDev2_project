import Form from "../(components)/form";
import Link from 'next/link'

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
            fieldType: "EMAIL"
        },
        {
            fieldName: "Password",
            nameAttr: "password",
            fieldType: "PASSWORD"
        },
        {
            fieldName: "Log in",
            nameAttr: "logIn",
            fieldType: "SUBMIT"
        }
    ]

    return(
        <>
        <div className="p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#DC8ECB] from-30% via-[#FFB169] via-60% to-[#FFF8BD] to-90%">
            <Form fields={fields} ></Form> 
            <div className="text-black text-center container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-b-lg">
                Don't have an account? <span className="no-underline hover:underline text-[#fc1c6e]"><Link href="/signUp">Sign up</Link></span>
            </div>
        </div>
        </>
    )
}