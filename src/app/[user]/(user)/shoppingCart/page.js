import getUsrCookie from "@/components/getUsrCookie"
import CartItemDisplay from "@/components/shoppingCart/cartItemDisplay"
import {auth} from '@/components/authentication/authUser'


export default function cart(){
    const userInfo = auth()

    // const userInfo = getUsrCookie()

    const sectionGridStyle = {
        allWidth: "min-h-screen bg-[#ffedd5] pt-[25px] pb-[20px] flex flex-col w-full items-center",
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