// The navbar for the pages in (user)
'use client'
import Link from 'next/link'


export default function Navbar({fields, styles}){
    const tabStyle = "flex flex-wrap flex-row content-center  px-8 justify-center w-fit text-2xl hover:bg-[#e38a40] font-medium	"
    console.log(fields)
    return (
        <>
            
                <div className={styles + " flex flex-wrap flex-row"}>
                    {fields.map((field, index)=><Link key={index} href={field.linkTo} className={tabStyle}><button >{field.name}</button></Link>)}
                    

                </div>
            
            
        </>
    )
}