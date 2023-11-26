import Navbar from "@/components/navbar"
import userCookie  from '@/components/getUsrCookie'

export default function BookiiLayout({children}){
    const user = userCookie()
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
            name: "ORDERS",
            linkTo: `/${user["username"]}/shoppingCart`
        },
        {
            name: `${user["username"].toUpperCase()}`,
            linkTo: `/${user["username"]}/userInfo`
        },
        {
            name: `ABOUT`,
            linkTo: `/${user["username"]}/userInfo`
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