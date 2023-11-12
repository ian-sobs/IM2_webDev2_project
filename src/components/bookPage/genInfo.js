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

export default async function genInfo({searchParams}){
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
    //     .then((bookInfo)=>bookInfo.json())
    //     .then((output)=>setBookInfo(output))
    // }
    // , [id])
    // const poolPromise = pool.promise()
    // const conn = await poolPromise.getConnection()
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [data, fields] = await conn.execute(`SELECT bk.bookID, bk.title, bk.description, bk.img, bk.priceUSD, bk.avgRating, bk.author, GROUP_CONCAT(gnr.name ORDER BY bk.bookID SEPARATOR ', ') AS genreName  FROM ((book bk INNER JOIN book_genre_relation bgr ON bk.bookID = bgr.bookID) INNER JOIN genre gnr ON gnr.genreID=bgr.genreID ) WHERE bk.bookID=? GROUP BY bk.bookID;`, [searchParams.bookID])
    const [bookInfo] = data
    await poolPromise.releaseConnection(conn)
    console.log("Book information async", bookInfo)

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
                <Image className={`${imgStyle.allWidth} ${imgStyle.sm} ${imgStyle.lg}`} src={bookInfo.img} width={612} height={939}></Image> 
                <div className={`${contentStyle.allWidth} ${contentStyle.sm}`}>
                
                    <div className="flex flex-col mb-[15px]">
                        <span className="font-semibold text-base tracking-wide">{bookInfo.title}</span>
                        <span className="font-light text-xs sm:text-sm italic">by {bookInfo.author}</span> {/*text-xs sm:text-sm*/}
                    </div>

                    <div className="flex flex-col mb-[15px]">
                        <p className="font-light text-xs sm:text-sm indent-6 text-justify">{bookInfo.description}</p> 
                    </div>

                    <div className="flex flex-col mb-[15px]">
                        <span className="font-medium text-sm">Genres</span>
                        <span className="font-light text-xs sm:text-sm text-justify">{bookInfo.genreName}</span> 
                    </div>

                    <div className="flex flex-col mb-[15px]">
                        <span className="font-medium text-sm">Ratings</span>
                        <div className="flex flex-row">
                            <span className="font-light text-xs sm:text-sm text-justify">{bookInfo.avgRating}</span> 
                        </div>
                    </div>
                    
                </div>
    
            </div>
        </>
    )
}