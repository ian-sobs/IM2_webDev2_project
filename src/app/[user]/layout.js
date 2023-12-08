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
            linkTo: `/${user["username"]}/orders`
        },
        {
            name: `${user["username"].toUpperCase()}`,
            linkTo: `/${user["username"]}/userInfo`
        },
        {
            name: `ABOUT`,
            linkTo: `/${user["username"]}/aboutpage`
        }
    ]
    
    // 
    return (
        <div>
            
            <Navbar fields={navFields} styles="h-30 bg-[#eab308] fixed w-full z-40"> </Navbar>
            <div className="h-28 bg-[#ffedd5]"></div>
            {/* <div className="h-[25px] bg-white"></div> */}
            
            {children}
            
        </div>
    )
}