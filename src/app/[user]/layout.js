import Navbar from "@/components/navbar"
import userCookie  from '@/components/getUsrCookie'
import {auth} from '@/components/authentication/authUser'

export default function BookiiLayout({children}){
    let usrInfo = auth()

    const navFields = [
        {
            name: "DORMS",
            linkTo: `/${usrInfo.unm}/market`
        },
        {
            name: "WISH LIST",
            linkTo: `/${usrInfo.unm}/favorites`
        },
        {
            name: "REQUEST",
            linkTo: `/${usrInfo.unm}/shoppingCart`
        },
        // {
        //     name: "REQUEST",
        //     linkTo: `/${usrInfo.unm}/orders`
        // },
        {
            name: `PROFILE`,
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