'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'

export default function genInfo(){
    let searchParams
    let search

    const [bookID, setBookID] = useState(0)

    useEffect(()=>{
        searchParams = useSearchParams()
        setBookID(parseInt(searchParams.get('bookID')))
    }
    , [])

    useEffect(()=>{
        fetch(`/user/book/api/genInfo/${bookID}`)
        .then(()=>)
    }
    , [bookID])

    return (
        <>
        
        </>
    )
}