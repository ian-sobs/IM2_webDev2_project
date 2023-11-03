import Image from 'next/image'
import welcomePhoto from '@/(icons)/welcomePhoto.png'
import Link from 'next/link'
import pool from '@/dbConn'

export default async function home(){
    // const poolPromise = pool.promise()
    // const db =  await poolPromise.getConnection()
    
    // const results = await db.execute('select * from country where countryID = ?', [1])
    // console.log(results)

    return(
        <>
            {/* <div className="min-h-screen bg-white px-10 flex flex-wrap content-center justify-center md:flex-row lg:flex-row xl:flex-row text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl  text-black">
                        <div className="flex flex-col"> 
                            <div className="flex flex-wrap flex-col content-center">
                                <p className="font-medium mb-[6px]">
                                    Welcome to
                                </p>
                                <div className="text-center bg-black bg-clip-content">
                                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#DC8ECB] from-30% via-[#FFB169] via-60% to-[#FFF8BD] to-90%">Bookii</span>
                                </div>
                            </div>
                            <p className="my-[8px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
                                Read more, learn more, and buy more with the convenience of having the book arrive at your doorstep with just a tap of your finger.
                            </p>
                        </div>
                        <div> i am a test div</div>
            </div> */}
            <div className="min-h-screen bg-white px-4 sm:px-6 md:px-8 lg:px-32 xl:px-36 ">
                <div className="min-h-screen flex flex-col space-y-10 justify-center text-black">
                    <div className="flex flex-col flex-wrap content-center text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl  text-black">
                        <div className='text-center'>Welcome to</div>
                        <div className=' bg-black text-center'><span className="font-medium	 bg-gradient-to-tr text-transparent bg-clip-text from-[#DC8ECB] from-30% via-[#FFB169] via-60% to-[#FFF8BD] to-90%">Bookii</span></div>
                    </div >
                    <p className="indent-[5%] text-justify my-[8px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-8"> 
                        Read more, learn more, and buy more with the convenience of having the book arrive at your doorstep with just a tap of your finger.
                    </p>
                    <div className='flex flex-wrap flex-col space-y-8 md:space-x-20 md:space-y-0 justify-center content-center md:flex-row'>
                        <Link href="/signUp">
                            <button className="text-xl w-32 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#DC8ECB] to-[#FFB169] text-white">
                                Sign Up
                            </button>
                        </Link>
                        <Link href="/login">
                            <button className="text-xl w-32 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#DC8ECB] to-[#FFB169] text-white">
                                Log in
                            </button>
                        </Link>                      
                    </div>
                </div>

            </div>
            
        </>
    )

}