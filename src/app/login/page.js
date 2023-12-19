// 'use client'
import Form from "@/components/form";
import Link from 'next/link'
import {submitLogin} from "./action";
// import { getCsrfToken } from 'next-auth/react';
import { cookies } from 'next/headers'


export default async function Login(){
    const fields = [
        // {
        //     nameAttr: "csrfToken",
        //     fieldType: "hidden",
        //     value: await getCsrfToken()
        // },
        {
            fieldName: "Log in",
            nameAttr: "logInHeading",
            fieldType: "h1",
            
        },
        {
            fieldName: "Email",
            nameAttr: "email",
            fieldType: "email",
            label: "Email"
        },
        {
            fieldName: "Password",
            nameAttr: "password",
            fieldType: "password",
            label: "Password"
        },
        {
            fieldName: "Log in",
            nameAttr: "logIn",
            fieldType: "submit"
        }
    ]
    // action='/api/auth/callback/credentials'
    const cookieStore = cookies()
    console.log(cookieStore.getAll("next-auth.callback-url"))
    return(
        <>
        <div className="p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#eab308] from-30% via-[#a3e635] via-60% to-[#65a30d] to-90%">
            <Form fields={fields} action={submitLogin}></Form> 
            <div className="text-black text-center container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-b-lg">
                Don't have an account? <span className="no-underline hover:underline text-[#65a30d]"><Link href="/signUp">Sign up</Link></span>
            </div>
        </div>
        </>
    )
}

// newTest@test.com
// newTesterPassword