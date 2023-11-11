import Navbar from "@/components/navbar"
import userCookie  from '@/components/getUsrCookie'

export default function BookiiLayout({children}){
    const user = userCookie()
    console.log("in layout", userCookie())
    const navFields = [
        {
            name: "MARKET",
            linkTo: `/${user["username"]}/market`
        },
        {
            name: "WISH LIST",
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
            
            <Navbar fields={navFields} styles="h-14 bg-[#ffa052] fixed w-full z-50"> </Navbar>
            <div className="h-14 "></div>
            {/* <div className="h-[25px] bg-white"></div> */}
            
            {children}
            
        </div>
    )
}