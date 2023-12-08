// The navbar for the pages in (user)
'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { Tab } from '@headlessui/react'


export default function Navbar({fields, styles}){
    const tabStyle = "flex flex-wrap flex-row content-center  px-8 justify-center w-fit h-8 text-md hover:bg-[#e38a40] font-medium focus:ring-[0px]"

    console.log(fields)
    return (
        <>
                
                
                <div className={styles + "  flex-wrap flex-column "}>
                    <nav className="bg-white border-gray-200 dark:bg-gray-900 text-black">
                            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                                <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <img src="https://cdn4.iconfinder.com/data/icons/essentials-74/24/046_-_House-512.png" className="h-8"/>
                                    <span className="whitespace-pre self-center text-lg font-semibold whitespace-nowrap dark:text-white">  Bookii @ USC-TC</span>
                                </a>
                                <div className='flex space-x-5px flex flex-wrap flex-col space-y-8 md:space-x-20 md:space-y-0 justify-center content-center md:flex-row'>
                                    <Link href="">
                                        <button className="text-md w-24 font-medium p-[5px] rounded-full text-center bg-gradient-to-r from-[#eab308] to-[#84cc16] text-white">
                                            Good day!
                                        </button>
                                    </Link>
                                                         
                                </div>
                            </div>
                    </nav>

                    

                    <Tab.Group manual>
                        <Tab.List className=" flex flex-wrap flex-row"> 
                            {fields.map((field, index)=>{return <Link key={index} href={field.linkTo} className="flex flex-row">
                                <Tab as={Fragment} className="text-white focus:ring-[0px]"> 
                                    {({ selected }) => (
                                        /* Use the `selected` state to conditionally style the selected tab. */
                                        <button
                                        className={
                                            selected ? `${tabStyle} bg-[#65a30d] text-white` : `${tabStyle}`
                                        }
                                        >
                                        {field.name} 
                                        </button>
                                    )}
                                </Tab>
                                </Link>})
                            }
                        </Tab.List>
                    </Tab.Group>
                    
                </div>
            
            
        </>
    )
}