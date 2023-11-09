import { cookies } from 'next/headers'
import Card from '@/components/card'

export default function Page(){
    const userCookie = cookies().get("userCredentials")
    const user = JSON.parse(userCookie.value)
    console.log(JSON.parse(userCookie.value))

    return (
    <>
    {/* space-x-9 space-y-9 */}
        <section className="min-h-screen bg-white pt-[25px] px-9 sm:px-11 md:px-14 lg:px-20">
            <div className="flex flex-wrap justify-normal  space-x-9">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                {/* <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> */}
            </div>
        </section>
    
    </>
    )
}