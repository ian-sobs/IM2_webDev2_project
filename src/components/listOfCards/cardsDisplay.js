'use client'
import { useState, useEffect } from "react"

export default function cardsDisplay(){
    const bookCards = books.map((book, index)=><Card key={index} details={book}></Card>)
    return(
        <>
            {bookCards}
        </>
    )
}