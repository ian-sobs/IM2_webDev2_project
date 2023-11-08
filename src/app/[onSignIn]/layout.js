import Navbar from "@/components/navbar"
import { cookies } from 'next/headers'

export default function BookiiLayout({children}){
    const userCookie = cookies().get("userCredentials")
    const user = JSON.parse(userCookie.value)
    console.log("in layout", user)
    const navFields = [
        {
            name: "Market",
            linkTo: `/${user["username"]}/market`
        },
        {
            name: "Favorites",
            linkTo: `/${user["username"]}/favorites`
        },
        {
            name: "Shopping Cart",
            linkTo: `/${user["username"]}/shoppingCart`
        },
        {
            name: `${user["username"]}`,
            linkTo: `/${user["username"]}/userInfo`
        },
    ]
    return (
        <div>
            <Navbar fields={navFields} styles="h-14 bg-orange-400 px-[10px]"> </Navbar>

            {children}
        </div>
    )
}