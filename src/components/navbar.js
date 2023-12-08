// The navbar for the pages in (user)
'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { Tab } from '@headlessui/react'

export default function Navbar({fields, styles}){
    const tabStyle = "flex flex-wrap flex-row content-center  px-8 justify-center w-fit h-full text-md hover:bg-[#e38a40] font-medium focus:ring-[0px]"
    console.log(fields)
    return (
        <>
            
                <div className={styles + " flex flex-wrap flex-row text-white"}>
                    <Tab.Group manual>
                        <Tab.List className=" flex flex-wrap flex-row"> 
                            {fields.map((field, index)=>{return <Link key={index} href={field.linkTo} className="flex flex-row">
                                <Tab as={Fragment} className="focus:ring-[0px]"> 
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