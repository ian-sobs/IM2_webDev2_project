'use client'
import { useRef , useState} from 'react';
import { useFormState } from "react-dom";
// import {create} from "@/app/signUp/actions"
// 'use client'

let initialState = {
    email: "",
    username: "",
    password: ""
}
function inputField(field, options, message){
    const styles = "text-black caret-[#9F9F9F] p-[3px] rounded-sm bg-slate-200 focus:outline-none focus:ring-2 ring-[#FFB169] "
    const ref = useRef(0)

    switch(field.fieldType){
        case "h1":
            return(
                    <div className="py-[15px] bg-transparent">
                        <h1 className="text-center text-2xl text-black font-semibold">
                            {field.fieldName}
                        </h1>
                        
                    </div>
            )

        case "select":
            return (
                <div className="py-[15px] bg-transparent flex flex-col">
                    <div className="flex space-x-[7px]">
                        <label className="text-black p-[3px]" htmlFor={field.nameAttr}>{field.fieldName}</label>
                        <select className={styles + "focus:ring-2 ring-[#FFB169] w-28"} id={field.nameAttr} name={field.nameAttr} defaultValue="">
                            {options}
                        </select>
                    </div>
                    <p ref={ref}></p>
                </div>)

        case "submit":
            if(message.isValid){
                return (
                <>
                    <div className="py-[15px] bg-transparent">
                        <div className='text-black font-semibold text-center'>Successful!</div>
                        <div className="flex justify-center">
                            <button className="text-xl w-32 font-medium p-[5px] rounded-full text-center  bg-[#65a30d]  text-white" id={field.nameAttr} name={field.nameAttr} type="submit">{field.fieldName}</button>
                        </div>
                    </div>
                </> )
            }
            return (
                <>
                    <div className="py-[15px] bg-transparent">
                        {/* <div className='text-black font-semibold text-center'>Unsuccessful!</div> */}
                        <div className="flex justify-center">
                            <button className="text-xl w-32 font-medium p-[5px] rounded-full text-center  bg-[#65a30d]  text-white" id={field.nameAttr} name={field.nameAttr} type="submit">{field.fieldName}</button>
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
                <div className="py-[7px] bg-transparent ">
                    <div className="flex flex-col">
                        <label className="text-black p-[3px]" htmlFor={field.nameAttr}>{field.fieldName}</label>
                        <input className={styles + "focus:ring-2 ring-[#FFB169]"} type={field.fieldType} id={field.nameAttr} name={field.nameAttr}></input>
                    </div>
                    <div className='text-left text-black font-semibold'>{message[field.nameAttr]} </div>
                </div>
            )
    }
        
}

export default function form({fields, action, options, ...props}){
    const [message, formAction] = useFormState(action, initialState);

    
    return(
        <>
        <form {...props} className="container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-t-lg" action={formAction}>

            <div className="flex flex-wrap justify-center">
                <div className="container w-5/6 ">
                    {fields.map((field, index)=>
                        <div key={index}>
                        
                            
                            {inputField(field, options, message)}
                        
                        </div>
                    )}
                </div>
                
            </div>
           
            {/* {Object.keys(message).map((property)=> <div className='text-center text-black'>{message[property]} </div>)} */}
            
        
        </form>
        </>
    )
}