'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'

// async function getBookId(){
//     let searchParams = useSearchParams()
// }

export default function genInfo(){
    let searchParams = useSearchParams()
    let id = searchParams.get('bookID')
    const [bookID, setBookID] = useState(0)
    const [bookInfo, setBookInfo] = useState({})

    // useEffect(()=> {
    //     setBookID(parseInt(searchParams.get('bookID'))) 
    // }
    // , [])

    useEffect(()=>{
        fetch(`/user/book/api/genInfo/${id}`)
        .then((results)=>results.json())
        .then((output)=>setBookInfo(output))
    }
    , [id])

    const imgStyle = {
        allWidth: "w-7/12 bg-red-400",
        lg: "",

    }//src={bookInfo.img}

    return (
        <>
            {/* <p className="text-black">{JSON.stringify(bookInfo)}</p> */}
            <div className="flex flex-wrap flex-row justify-evenly bg-red-400 p-[30px] text-black w-6/12">
                <Suspense fallback={<p>Loading feed...</p>}>
                    <Image className={`${imgStyle.allWidth} ${imgStyle.lg}`} src={bookInfo.img} width={612} height={939}></Image> 
                </Suspense>
                <Suspense fallback={<p>Loading feed...</p>}>
                <div className="w-5/12 p-[30px]">jdflajfla</div>
                </Suspense>
            </div>
        </>
    )
}