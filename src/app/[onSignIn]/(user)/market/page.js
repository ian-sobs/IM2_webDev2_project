import { cookies } from 'next/headers'

export default function Page(){
    const userCookie = cookies().get("userCredentials")
    const user = JSON.parse(userCookie.value)
    console.log(JSON.parse(userCookie.value))

    return (<p>Welcome to the market</p>)
}