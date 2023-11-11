'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'

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

    return (
        <>
            {/* <p className="text-black">{JSON.stringify(bookInfo)}</p> */}
            <div className="flex flex-wrap flex-col items-center"></div>
        </>
    )
}