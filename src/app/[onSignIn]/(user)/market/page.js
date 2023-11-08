import { cookies } from 'next/headers'

function market(){
    const userCookie = cookies().get("userCredentials")
    const user = JSON.parse(userCookie.value)
    console.log(JSON.parse(userCookie.value))

    return <p>Welcome to the market</p>
}

export default market