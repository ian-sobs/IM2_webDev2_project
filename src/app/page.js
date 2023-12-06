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
        "https://images.unsplash.com/photo-1618414952052-289dab88b409?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];
    

    return(
        <>
            <div className="min-h-screen bg-white ">
                    <nav className="bg-white border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="https://cdn2.iconfinder.com/data/icons/flat-line-valentine-1/1010/love-book-512.png" className="h-8"/>
                                <span className="whitespace-pre self-center text-lg font-semibold dark:text-white">  Bookii</span>
                            </a>
                            <div className='flex space-x-3.75 flex-wrap flex-col space-y-8 md:space-x-20 md:space-y-0 justify-center content-center md:flex-row'>
                                <Link href="/signUp">
                                    <button className="text-md w-24 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#DC8ECB] to-[#FFB169] text-white">
                                        Sign Up
                                    </button>
                                </Link>
                                <Link href="/login">
                                    <button className="text-md w-24 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#DC8ECB] to-[#FFB169] text-white">
                                        Log in
                                    </button>
                                </Link>                      
                            </div>
                        </div>
                    </nav>
                    <nav className="bg-white dark:bg-gray-900">
                        <div className="bg-[#FFB169]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                        <div className="bg-[#FFB169]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
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
                        <div className="bg-[#DC8ECB]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                        <div className="bg-[#DC8ECB]  flex flex-wrap items-center justify-between mx-auto p-3"></div>
                    </nav>
                    
                    <nav className="bg-white dark:bg-gray-900">
                        <div className="bg-white  flex flex-wrap items-center justify-between mx-auto p-4">
                        </div>
                    </nav>

                    <h1 className="whitespace-pre text-center text-xl font-semibold text-fuchsia-400">Unlock Your Mind's Potential Through Bookii</h1>
            </div> 
             
        </>
    )

}