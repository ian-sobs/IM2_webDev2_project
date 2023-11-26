import Navbar from '@/components/navbar'

export default function AdminNav({children}){
    // const user = userCookie()
    const navFields = [
        {
            name: "BOOKS",
            linkTo: `/admin/books`
        },
        {
            name: "GENRES",
            linkTo: `/admin/genres`
        },
        {
            name: "ORDERS",
            linkTo: `/admin/orders`
        },
        {
            name: "USERS",
            linkTo: `/admin/users`
        }
    ]
    return (
        <>
        <div>
            
            <Navbar fields={navFields} styles="h-14 bg-orange-300 fixed w-full z-40"> </Navbar>
            <div className="h-14 "></div>
            {/* <div className="h-[25px] bg-white"></div> */}
            
            {children}
            
        </div>           
        </>
    )
}