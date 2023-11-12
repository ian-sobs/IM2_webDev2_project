'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
// import Image from 'next/image'

// async function getBookId(){
//     let searchParams = useSearchParams()
// }

export default function genInfoDesc(){
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
            {/* <div className={`${containerStyle.allWidth} ${containerStyle.sm} ${containerStyle.mobile}`}>
                <Image className={`${imgStyle.allWidth} ${imgStyle.sm} ${imgStyle.lg}`} src={bookInfo.img} width={612} height={939}></Image>  */}
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
    
            {/* </div> */}
        </>
    )
}