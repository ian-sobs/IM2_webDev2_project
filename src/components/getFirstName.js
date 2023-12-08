import { cookies } from "next/headers"

export default function getFirst(){
    let userCookie

    if(cookies().has('userCredentials')){ 
        userCookie = cookies().get("userCredentials")
        return JSON.parse(userCookie.value)
    }
    
    return JSON.parse('{"firstName" : "nonUser"}')
}

