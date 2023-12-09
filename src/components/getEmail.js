import { cookies } from "next/headers"

export default function getEmail(){
    let userCookie

    if(cookies().has('userCredentials')){ 
        userCookie = cookies().get("userCredentials")
        return JSON.parse(userCookie.value)
    }
    
    return JSON.parse('{"email" : "nonUser"}')
}

