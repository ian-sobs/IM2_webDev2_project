// The navbar for the pages in (user)
// 'use client'
import Link from 'next/link'


export default function Navbar({fields, styles}){
    const tabStyle = "flex flex-wrap flex-row content-center justify-center w-44 text-2xl hover:bg-sky-700"
    console.log(fields)
    return (
        <>
            <div className={styles + " flex flex-wrap flex-row"}>
                {fields.map((field)=><Link href={field.linkTo} className={tabStyle}><button >{field.name}</button></Link>)}
                

            </div>
        </>
    )
}