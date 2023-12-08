'use client';

import Image from 'next/image'
import Link from 'next/link'
import Carousel from "src/components/carousel.tsx";

export default async function home(){
    // const poolPromise = pool.promise()
    // const db =  await poolPromise.getConnection()
    
    // const results = await db.execute('select * from country where countryID = ?', [1])
    // console.log(results)

    const images = [
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1463620910506-d0458143143e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1571474039046-42bc4e7f4b98?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ];
    

    return(
        <>
            <div className="min-h-screen bg-white ">
                    <nav className="bg-white border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="https://cdn4.iconfinder.com/data/icons/essentials-74/24/046_-_House-512.png" className="h-8"/>
                                <span className="whitespace-pre self-center text-lg font-semibold whitespace-nowrap dark:text-white">  Bookii @ USC-TC</span>
                            </a>
                            <div className='flex space-x-5px flex flex-wrap flex-col space-y-8 md:space-x-20 md:space-y-0 justify-center content-center md:flex-row'>
                                <Link href="/signUp">
                                    <button className="text-md w-24 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#eab308] to-[#84cc16] text-white">
                                        Sign Up
                                    </button>
                                </Link>
                                <Link href="/login">
                                    <button className="text-md w-24 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#eab308] to-[#84cc16] text-white">
                                        Log in
                                    </button>
                                </Link>                      
                            </div>
                        </div>
                    </nav>
                    <nav className="bg-white dark:bg-gray-900">
                        <div className="bg-[#fcd34d]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                        <div className="bg-[#fcd34d]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                    </nav>

                    <div className="bg-rose-200 lg:w-4/4 mx-auto my-2">
                        <Carousel loop>
                            {images.map((src, i) => {
                            return (
                                // 👇 style each individual slide.
                                // relative - needed since we use the fill prop from next/image component
                                // h-64 - arbitrary height
                                // flex[0_0_100%]
                                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                                <div className="relative h-128 flex-[0_0_100%]" key={i}>
                                {/* use object-cover + fill since we don't know the height and width of the parent */}
                                <Image src={src} fill className="object-cover" alt="imgimg" />
                               
                                </div>
                            );
                            })}
                        </Carousel>
                    </div>

                    <nav className="bg-white dark:bg-gray-900">
                        <div className="bg-[#65a30d]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                        <div className="bg-[#65a30d]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                    </nav>
                    
                    <nav className="bg-white dark:bg-gray-900">
                        <div className="bg-white  flex flex-wrap items-center justify-between mx-auto p-4">
                        </div>
                    </nav>

                    <h1 className="whitespace-pre text-center text-xl font-semibold text-lime-700">Book your dorm now!</h1>
            </div> 
             
        </>
    )

}