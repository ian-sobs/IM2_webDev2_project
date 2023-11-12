// 'use client'
// import { useState, useEffect } from "react"
// import { useSearchParams } from 'next/navigation'
import GenInfoDesc from './genInfoDesc'
import { Suspense } from 'react'
import Image from 'next/image'
import pool from '@/dbConn'
// async function getBookId(){
//     let searchParams = useSearchParams()
// }

export default async function genInfo(){
    // let searchParams = useSearchParams()
    // let id = searchParams.get('bookID')
    // const [bookID, setBookID] = useState(0)
    // const [bookInfo, setBookInfo] = useState({})

    // // useEffect(()=> {
    // //     setBookID(parseInt(searchParams.get('bookID'))) 
    // // }
    // // , [])

    // useEffect(()=>{
    //     fetch(`/user/book/api/genInfo/${id}`)
    //     .then((results)=>results.json())
    //     .then((output)=>setBookInfo(output))
    // }
    // , [id])
    // const poolPromise = pool.promise()
    // const conn = await poolPromise.getConnection()

    const imgStyle = {
        allWidth: "w-full ",
        sm: "sm:w-5/12",
        lg: "",

    }//src={bookInfo.img}

    const containerStyle = {
        allWidth: "flex bg-white shadow-lg text-black",
        mobile: "flex-col justify-start w-full p-[20px]",
        sm: "sm:flex-row sm:justify-between sm:p-[30px]"
    }

    const contentStyle = {
        allWidth: "pt-[24px] flex flex-col ", //w-5/12 justify-between
        sm: "sm:grow sm:pl-[35px] sm:pt-0"
    }
    return (
        <>
            {/* <p className="text-black">{JSON.stringify(bookInfo)}</p> */}
            <div className={`${containerStyle.allWidth} ${containerStyle.sm} ${containerStyle.mobile}`}>
                <Image className={`${imgStyle.allWidth} ${imgStyle.sm} ${imgStyle.lg}`} src="/bookPhotos/lotr.jpeg" width={612} height={939}></Image> 
                <div className={`${contentStyle.allWidth} ${contentStyle.sm}`}>
                    <Suspense fallback={<p>loading...</p>}>
                        <GenInfoDesc></GenInfoDesc>
                    </Suspense>
                    
                </div>
    
            </div>
        </>
    )
}