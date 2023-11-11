'use client'
import { useState, useEffect } from "react"
import Card from "./card"
import {Book} from '@/components/listOfCards/bookClass'
import { Tab } from '@headlessui/react'
//{currency, tabStyles, requestURL}
export default function cardsDisplay({currency, tabStyles, requestURL, username}){
    const [books, setBooks] = useState([])
    console.log(username)
    useEffect(() => {
        fetch(requestURL)
        .then((results)=>results.json())
        .then((data)=>setBooks(data.map((datum)=>new Book(datum.title, datum.author, datum.avgRating, datum.img, datum.priceUSD))))
      }, [])

    const bookCards = books.map((book, index)=><Card key={index} details={book} currency={currency} username={username}></Card>)// currency={currency}
    
    return(
        <>
            <div className={tabStyles + " flex flex-wrap justify-center"}>
                Hi
            </div>
            {bookCards}
        </>
    )
}