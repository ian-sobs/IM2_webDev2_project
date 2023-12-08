import Navbar from "@/components/navbar"
import userCookie  from '@/components/getUsrCookie'

export default function BookiiLayout({children}){
    const user = userCookie()
    const navFields = [
        {
            name: "MARKET",
            linkTo: `/${user["unm"]}/market`
        },
        {
            name: "WISH LIST",
            linkTo: `/${user["unm"]}/favorites`
        },
        {
            name: "SHOPPING CART",
            linkTo: `/${user["unm"]}/shoppingCart`
        },
        {
            name: "ORDERS",
            linkTo: `/${user["unm"]}/orders`
        },
        {
            name: `${user["unm"].toUpperCase()}`,
            linkTo: `/${user["unm"]}/userInfo`
        },
        {
            name: `ABOUT`,
            linkTo: `/${user["unm"]}/aboutpage`
        }
    ]
    
    // 
    return (
        <div>
            
            <Navbar fields={navFields} styles="h-14 bg-orange-300 fixed w-full z-40"> </Navbar>
            <div className="h-14 "></div>
            {/* <div className="h-[25px] bg-white"></div> */}
            
            {children}
            
        </div>
    )
}