'use client'
import { useState, useEffect } from "react"
import Card from "./card"
import {Book} from '@/components/listOfCards/bookClass'

export default function cardsDisplay({currency}){
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/user/market/api")
        .then((results)=>results.json())
        .then((data)=>setBooks(data.map((datum)=>new Book(datum.title, datum.author, datum.avgRating, datum.img, datum.priceUSD))))
      }, [])

    const bookCards = books.map((book, index)=><Card key={index} details={book} currency={currency}></Card>)
    
    return(
        <>
            {bookCards}
        </>
    )
}