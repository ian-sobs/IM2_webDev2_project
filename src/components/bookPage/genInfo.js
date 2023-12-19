// 'use client'
// import { useState, useEffect } from "react"
// import { useSearchParams } from 'next/navigation'
// import GenInfoDesc from './genInfoDesc'
import { Suspense } from 'react'
import Image from 'next/image'
import pool from '@/dbConn'
import FaveButton from './faveButton'
import getUsrCookie from '../getUsrCookie'
import BuyButton from './purchaseBut'
import StarRating from './star'
import RateBut from './rating'
// import dynamic from 'next/dynamic'

// const BuyButton = dynamic(() => import('./purchaseBut'))

export default async function genInfo({searchParams, userInfo}){
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
    const [data, fields] = await conn.execute(`SELECT bk.bookID, bk.title, bk.description, bk.img, bk.priceUSD, bk.avgRating, bk.author, gnr.name AS genreName FROM (book bk INNER JOIN genre gnr ON gnr.genreID = bk.genreID) WHERE bk.bookID=?`, [parseInt(searchParams.bookID)])
    
    const [bookInfo] = data
    console.log("dataBook", bookInfo)
    console.log('bookInfo_geninfo', bookInfo)
    poolPromise.releaseConnection(conn)
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

    // const userInfo = getUsrCookie()
    // console.log("genInfoUserInfo", userInfo)
    return (
        <>
            {/* <p className="text-black">{JSON.stringify(bookInfo)}</p> */}
            <div className={`${containerStyle.allWidth} ${containerStyle.sm} ${containerStyle.mobile}`}>

                    <Image className={`${imgStyle.allWidth} ${imgStyle.sm} ${imgStyle.lg}`} src={bookInfo.img} width={1920} height={1080} alt={`${bookInfo.title}`}></Image> 

                    <div className={`${contentStyle.allWidth} ${contentStyle.sm}`}>
                        <div>
                            <div className="flex flex-col items-center sm:items-start mb-[15px]">
                                <span className="font-semibold text-lg tracking-wide">{bookInfo.title}</span>
                                <span className="font-light text-lg sm:text-base italic">located in {bookInfo.author}</span> 
                            </div>

                            <div className="flex flex-col mb-[20px] max-h-[20rem]">
                                <div className="overflow-y-auto">
                                    <p className="font-light text-lg sm:text-base indent-6 text-justify mr-[4px] ">{bookInfo.description}</p> 
                                </div>
                                
                            </div>
                        </div>

                        <div className='flex flex-col justify-evenly grow'>
                            <div className="flex flex-col mb-[15px]  items-center sm:items-start">
                                <span className="font-medium text-lg">Room Type</span>
                                <span className="font-light text-lg sm:text-base text-center sm:text-justify">{bookInfo.genreName}</span> 
                            </div>
{/* 
                            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-[24px]">
                                <span className="font-medium text-ratings text-lg mr-[8px]">Ratings</span>
                                <div className="flex flex-row items-center">
                                    <StarRating rating={parseFloat(bookInfo.avgRating)}></StarRating>
                                    <span className="font-light text-lg text-justify ml-[6px]">{bookInfo.avgRating}</span> 
                                    
                                </div>
                                
                            </div> */}
                            
                            <div className="flex flex-col md1:flex-row  md1:justify-between">
                                {/* <RateBut bookID={bookInfo.bookID} userID={parseInt(userInfo.usr)}></RateBut> */}
                                <div className="h-[10px] md1:h-0"></div>
                                <FaveButton userInfo={userInfo} bookInfo={bookInfo}></FaveButton>
                                <div className="h-[10px] md1:h-0"></div>
                                <BuyButton userInfo={userInfo} bookInfo={bookInfo}></BuyButton>
                            </div>
                        </div>

                    </div>                
    
            </div>
        </>
    )
}