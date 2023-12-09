import Navbar from '@/components/navbar'

export default function AdminNav({children}){
    // const user = userCookie()
    const navFields = [
        {
            name: "DORM",
            linkTo: `/admin/books`
        },
        {
            name: "ACCOMODATION",
            linkTo: `/admin/genres`
        },
        {
            name: "REQUESTS",
            linkTo: `/admin/requests`
        },
        {
            name: "ASSGINMENTS",
            linkTo: `/admin/assginments`
        },
        {
            name: "USERS",
            linkTo: `/admin/users`
        }
    ]
    return (
        <>
        <div>
            
            <Navbar fields={navFields} styles="h-14 bg-[#eab308] fixed w-full z-40"> </Navbar>
            
            {/* <div className="h-[25px] bg-white"></div> */}
            
            {children}
            
        </div>           
        </>
    )
}