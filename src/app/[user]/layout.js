import Navbar from "@/components/navbar"
import userCookie  from '@/components/getUsrCookie'
import {auth} from '@/components/authentication/authUser'

export default function BookiiLayout({children}){
    let usrInfo = auth()

    const navFields = [
        {
            name: "MARKET",
            linkTo: `/${usrInfo.unm}/market`
        },
        {
            name: "WISH LIST",
            linkTo: `/${usrInfo.unm}/favorites`
        },
        {
            name: "SHOPPING CART",
            linkTo: `/${usrInfo.unm}/shoppingCart`
        },
        {
            name: "ORDERS",
            linkTo: `/${usrInfo.unm}/orders`
        },
        {
            name: `${usrInfo.unm.toUpperCase()}`,
            linkTo: `/${usrInfo.unm}/userInfo`
        },
        {
            name: `ABOUT`,
            linkTo: `/${usrInfo.unm}/aboutpage`
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