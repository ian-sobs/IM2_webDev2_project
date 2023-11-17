'use client'
import { useState, useEffect, useRef } from "react"
import Card from "./card"
import {Book} from '@/components/listOfCards/bookClass'
import { Tab } from '@headlessui/react'
//{currency, tabStyles, requestURL}
export default function cardsDisplay({currency, localCurrPerUSD, tabStyles, requestURL, username}){
    const [books, setBooks] = useState([])
    const [bookDisplay, setBookDisplay] = useState([])
    const isInitialRender = useRef(true);

    // console.log(username)
    // console.log(window.innerWidth)

    useEffect(() => {
        fetch(requestURL)
        .then((results)=>results.json())
        .then((data)=>{
            
            setBooks(data.map((datum)=>new Book(datum.bookID, datum.title, datum.author, datum.avgRating, datum.img, datum.priceUSD)))
            console.log("books in market: ", books)
        })
      }, [])

    useEffect(() => {
        // Skip the side effect on the initial render
        if (isInitialRender.current) {
          isInitialRender.current = false;
          return;
        }

        const bookCards = books.map((book, index)=>{
            console.log('index : ', index)
            return <Card key={index} details={book} currency={currency} username={username} localCurrPerUSD={localCurrPerUSD}></Card>
        })
        setBookDisplay(bookCards)

        console.log('1 : ', 1)
        console.log('2 : ', 2)
    }, [books])

    return(
        <>
            {bookDisplay}
         </>
    )
    

}