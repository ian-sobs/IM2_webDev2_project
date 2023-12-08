import getUsrCookie from "@/components/getUsrCookie"
import CartItemDisplay from "@/components/shoppingCart/cartItemDisplay"
import { cookies } from "next/headers"
import {redirect} from 'next/navigation'

export default function cart(){
    const jwt = require('jsonwebtoken')

    if(!cookies().has('usrToken')) redirect('/login')

    const usrToken = cookies().get('usrToken')
    console.log("usrTokenInMidware", usrToken)

    try {
        var decoded = jwt.verify(usrToken.value, process.env.JWT_SECRET);
    } catch(err) {
        console.log("jwtErr", err)
        redirect('/login')
    }

    // const userInfo = getUsrCookie()

    const sectionGridStyle = {
        allWidth: "min-h-screen bg-slate-100 pt-[25px] pb-[20px] flex flex-col w-full items-center",
        mobile:"px-9 ",
        sm:"sm:px-3 ",
        md:"md:px-4 ",
        lg:"lg:px-20 ",
        alg: "alg:px-28",
        xl:"xl:px-32 "
    }

    return (
        <>
            <section name="sectionGrid" className={`${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
                <CartItemDisplay userInfo={userInfo}></CartItemDisplay>               
            </section>
               
        </>
    )
}