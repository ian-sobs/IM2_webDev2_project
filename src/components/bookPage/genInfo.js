// 'use client'
// import { useState, useEffect } from "react"
// import { useSearchParams } from 'next/navigation'
// import GenInfoDesc from './genInfoDesc'
import { Suspense } from 'react'
import Image from 'next/image'
import pool from '@/dbConn'
import FaveButton from './faveButton'
import BuyButton from './purchaseBut'
import getUsrCookie from '../getUsrCookie'
// import Rating from './rating'

// async function getBookId(){
//     let searchParams = useSearchParams()
// }

// function Loading(){
//     console.log("loading")
//     return(
//         <>
//             <p className="text-black text-2xl">LOADING....</p>
//         </>
//     )
// }

export default async function genInfo({searchParams}){
    // let searchParams = useSearchParams()
    // let id = searchParams.get('bookID')
    // const [bookID, setBookID] = useState(0)


    // // useEffect(()=> {
    // //     setBookID(parseInt(searchParams.get('bookID'))) 
    // // }
    // // , [])

    // const [bookInfo, setBookInfo] = useState({})
    // useEffect(()=>{
    //     fetch(`/user/book/api/genInfo/${id}`)
    //     .then((bookInfo)=>bookInfo.json())
    //     .then((output)=>setBookInfo(output))
    // }
    // , [id])

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    console.log(parseInt(searchParams.bookID))
    const [data, fields] = await conn.execute(`SELECT bk.bookID, bk.title, bk.description, bk.img, bk.priceUSD, bk.avgRating, bk.author, GROUP_CONCAT(gnr.name ORDER BY bk.bookID SEPARATOR ', ') AS genreName FROM ((book bk LEFT JOIN book_genre_relation bgr ON bk.bookID = bgr.bookID) LEFT JOIN genre gnr ON gnr.genreID = bgr.genreID) WHERE bk.bookID=? GROUP BY bk.bookID;`, [parseInt(searchParams.bookID)])
    console.log("dataBook", data)
    const [bookInfo] = data
    await poolPromise.releaseConnection(conn)
    console.log("Book information async", bookInfo)

    const imgStyle = {
        allWidth: "w-full ",
        sm: "sm:w-5/12",
        lg: "",

    }//src={bookInfo.img}

    const containerStyle = {
        allWidth: "flex bg-white shadow-lg text-black rounded-md ",
        mobile: "flex-col justify-start w-full p-[20px] ",
        sm: "sm:flex-row sm:justify-between sm:p-[30px] "
    }

    const contentStyle = {
        allWidth: "pt-[24px] flex flex-col ", //w-5/12 justify-between
        sm: "sm:grow sm:pl-[35px] sm:pt-0"
    }

    const userInfo = getUsrCookie()
    console.log("genInfoUserInfo", userInfo)
    return (
        <>
            {/* <p className="text-black">{JSON.stringify(bookInfo)}</p> */}
            <div className={`${containerStyle.allWidth} ${containerStyle.sm} ${containerStyle.mobile}`}>

                    <Image className={`${imgStyle.allWidth} ${imgStyle.sm} ${imgStyle.lg}`} src={bookInfo.img} width={612} height={939} alt={`${bookInfo.title}`}></Image> 

                    <div className={`${contentStyle.allWidth} ${contentStyle.sm}`}>
                        
                        <div className="flex flex-col items-center sm:items-start mb-[15px]">
                            <span className="font-semibold text-lg tracking-wide">{bookInfo.title}</span>
                            <span className="font-light text-lg sm:text-base italic">by {bookInfo.author}</span> 
                        </div>

                        <div className="flex flex-col mb-[15px] max-h-[20rem]">
                            <div className="overflow-y-auto">
                                <p className="font-light text-lg sm:text-base indent-6 text-justify mr-[4px]">{bookInfo.description}</p> 
                            </div>
                            
                        </div>

                        <div className="flex flex-col mb-[15px]  items-center sm:items-start">
                            <span className="font-medium text-lg">Genres</span>
                            <span className="font-light text-lg sm:text-base text-center sm:text-justify">{bookInfo.genreName}</span> 
                        </div>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-[24px]">
                            <span className="font-medium text-ratings text-lg mr-[8px]">Ratings</span>
                            <div className="flex flex-row">
                            {/* className="flex flex-row" */}
                                {/* <Rating></Rating> */}
                                <span className="font-light text-lg text-justify">{bookInfo.avgRating}</span> 
                            </div>
                        </div>

                        <div className="flex flex-col md1:flex-row  md1:px-9 lg:px-10 xl:px-20 md1:justify-between">
                            <FaveButton userInfo={userInfo} bookInfo={bookInfo}></FaveButton>
                            <div className="h-[10px] md1:h-0"></div>
                            <BuyButton userInfo={userInfo} bookInfo={bookInfo}></BuyButton>
                        </div>
                        
                    </div>                
    
            </div>
        </>
    )
}