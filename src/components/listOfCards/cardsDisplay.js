'use client'
import { useState, useEffect } from "react"
import Card from "./card"
import {Book} from '@/components/listOfCards/bookClass'
import { Tab } from '@headlessui/react'
//{currency, tabStyles, requestURL}
export default function cardsDisplay({currency, localCurrPerUSD, tabStyles, requestURL, username}){
    const [books, setBooks] = useState([])
    console.log(username)
    console.log(window.innerWidth)
    useEffect(() => {
        fetch(requestURL)
        .then((results)=>results.json())
        .then((data)=>setBooks(data.map((datum)=>new Book(datum.bookID, datum.title, datum.author, datum.avgRating, datum.img, datum.priceUSD))))
      }, [])

    // const bookCards = books.map((book, index)=><Card key={index} details={book} currency={currency} username={username}></Card>)// currency={currency}
    
    // if(books.length == 0){
    //     return(
    //         <>
    //             {/* <div className={tabStyles + " flex flex-wrap justify-center"}>
    //                 Hi
    //             </div> */}
    //             <h1 className="text-black">No books</h1>
    //         </>
    //     )
    // }
    const bookCards = books.map((book, index)=><Card key={index} details={book} currency={currency} username={username} localCurrPerUSD={localCurrPerUSD}></Card>)
    return(
        <>
            {/* <div className={tabStyles + " flex flex-wrap justify-center"}>
                    Hi
            </div> */}
            {bookCards}
         </>
    )
    

}