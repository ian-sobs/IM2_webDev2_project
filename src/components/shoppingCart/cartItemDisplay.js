'use client'
import CartItem from "./cartItem"
import { useState , useEffect } from "react"


export default function cartItemDisplay({userInfo}){
    const [cartItems, setCartItems] = useState([])
    const [cartTotalDue, setCartTotalDue] = useState(0)

    useEffect(()=>{
        fetch('/user/shoppingCart/api')
        .then((result)=>result.json())
        .then((output)=>{
            setCartItems(output)
            console.log(output)
        })
    }, [])

    useEffect(()=>{
        let amountDue = 0
        cartItems.forEach((item, index)=>{
            console.log("amountDue", amountDue)
            console.log(parseFloat(item.totalPriceUSD))
            amountDue = parseFloat(item.totalPriceUSD) + amountDue
        })
        setCartTotalDue(parseFloat(amountDue.toFixed(2)))
    }, [cartItems])

    const itemsToDisplay = cartItems.map((item)=><CartItem userInfo={userInfo} bookID={item.bookID} bookTitle={item.titile} bookImg={item.img} qty={item.qty} totalPriceUSD={item.totalPriceUSD} dateOrdered={item.dateOrdered} address={item.address}></CartItem>)

    
    return(
        <>
            {itemsToDisplay}
            <p className="text-black"> {cartTotalDue}</p>
            <button className="bg-green-400 p-4 rounded-md">Order</button>
        </>
    )

}