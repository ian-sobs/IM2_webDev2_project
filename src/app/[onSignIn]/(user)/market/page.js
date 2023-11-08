import { cookies } from 'next/headers'

export default function Page(){
    const userCookie = cookies().get("userCredentials")
    const user = JSON.parse(userCookie.value)
    console.log(JSON.parse(userCookie.value))

    return (
    <>
        <section className="min-h-screen bg-white pt-[75px] px-20">
            <div className="flex flex-wrap">
sfgsg
            </div>
        </section>
    
    </>
    )
}