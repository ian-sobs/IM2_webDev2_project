import Navbar from "@/components/navbar"
import { cookies } from 'next/headers'

export default function BookiiLayout({children}){
    const userCookie = cookies().get("userCredentials")
    const user = JSON.parse(userCookie.value)
    console.log("in layout", user)
    const navFields = [
        {
            name: "MARKET",
            linkTo: `/${user["username"]}/market`
        },
        {
            name: "FAVORITES",
            linkTo: `/${user["username"]}/favorites`
        },
        {
            name: "SHOPPING CART",
            linkTo: `/${user["username"]}/shoppingCart`
        },
        {
            name: `${user["username"].toUpperCase()}`,
            linkTo: `/${user["username"]}/userInfo`
        },
    ]
    return (
        <div>
            
            <Navbar fields={navFields} styles="h-14 bg-[#ffa052]"> </Navbar>

            {children}
            
        </div>
    )
}