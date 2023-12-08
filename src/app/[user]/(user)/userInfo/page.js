import {auth} from '@/components/authentication/authUser'
// import userCookie  from '@/components/getUsrCookie'
// import emailCookie  from '@/components/getEmail'
// import firstN  from '@/components/getFirstName'
// import lastN  from '@/components/getLastName'
// import birth  from '@/components/getBirth'
// import add  from '@/components/getAddress'


export default function Page(){
    const userInfo = auth()

    const sectionGridStyle = {
        allWidth: "min-h-screen min-w-screen pt-[25px] bg-[#ffedd5] pb-[20px] w-full",
        mobile:"grid-cols-2 px-9",
        sm:"sm:px-11 sm:grid-cols-2",
        md:"md:px-14 md:grid-cols-3",
        lg:"lg:px-20 lg:grid-cols-4 ",
        xl:"xl:px-22 xl:grid-cols-4"
    }

    // const user = userCookie()
    // const email = emailCookie()
    // const first = firstN()
    // const last = lastN()
    // const bday = birth()
    // const addr = add()
    
    return (
    <>

    {/* space-x-9 space-y-9 */}
    
    <div className = {"px-80 bg-[#ffedd5]"}>
        <section name="sectionGrid" className={` ${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
            <div className = {"bg-[#f7fee7] w-full h-full place-items-center justify-right"}>
                    <div className="bg-inherit w-full h-full">
                        <div className="pt-[12px] text-black">
                            <div className="flex flex-col font-semibold	whitespace-pre text-3xl py-8 items-center md:flex-row justify-right">                My Profile:  </div>
                            <div className="flex flex-col px-40 place-items-center">
                                <span className='w-4/6 h-12 rounded-full bg-gradient-to-r from-[#d9f99d] to-[#d9f99d] text-[#365314] px-24 py-2 text-center font-normal text-lg	'>
                                    Username: {userInfo["unm"]}
                                </span>
                                <span className='px-60 py-4 text-left font-normal	text-xl	'>
                                    
                                </span>
                                <span className='w-4/6 h-12 rounded-full bg-gradient-to-r from-[#d9f99d] to-[#d9f99d] text-[#365314] px-16 py-2 text-center font-normal text-lg	'>
                                    First name: {userInfo["given_name"]} 
                                </span>
                                <span className='px-60 py-4 text-left font-normal	text-xl	'>
                                    
                                </span>
                                <span className='w-4/6 h-12 rounded-full bg-gradient-to-r from-[#d9f99d] to-[#d9f99d] text-[#365314] px-16 py-2 text-center font-normal text-lg	'>
                                    Last name: {userInfo["last_name"]} 
                                </span>
                                <span className='w-4/6 h-12 rounded-full bg-gradient-to-r from-[#d9f99d] to-[#d9f99d] text-[#365314] px-16 py-2 text-center font-normal text-lg'>
                                    Email: {userInfo["email"]}
                                </span>
                                <span className='px-60 py-4 text-left font-normal	text-xl	'>
                                    
                                </span>
                                <span className='w-4/6 h-12 rounded-full bg-gradient-to-r from-[#d9f99d] to-[#d9f99d] text-[#365314]  py-2 text-center font-normal text-lg'>
                                    Birthdate: {userInfo["birthdate"]}
                                </span>
                                {/* <span className='px-60 py-4 text-left font-normal	text-xl	'>
                                    
                                </span>
                                <span className='w-4/6 h-12 rounded-full bg-gradient-to-r from-[#d9f99d] to-[#d9f99d] text-[#365314] px-16 py-2 text-center font-normal text-lg'>
                                    Address: {addr["address"]}
                                </span> */}
                                <span className='px-60 py-4 text-left font-normal	text-xl	'>
                                    
                                </span>
                                <span className='px-60 py-8 text-left font-normal	text-xl	'>
                                    
                                </span>
                            </div>
    
                        </div>
                    </div>
                </div>

        </section>
        </div>
    
    </>
    )
}