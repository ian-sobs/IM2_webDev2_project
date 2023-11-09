import { cookies } from "next/headers"

export default function getUsrCookie(){
    const userCookie = cookies().get("userCredentials")
    return JSON.parse(userCookie.value)
}

