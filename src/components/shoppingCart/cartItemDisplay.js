'use client'
import CartItem from "./cartItem"
import { useState , useEffect } from "react"
import OrderPage from "../orderPage/orderDisplay";  //Jiwooedit

export default function cartItemDisplay({userInfo}){
    const [cartItems, setCartItems] = useState([])
    const [cartTotalDue, setCartTotalDue] = useState(0)
    const [showOrderPage, setShowOrderPage] = useState(false); //jiwooedit

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

    const itemsToDisplay = cartItems.map((item)=><CartItem userInfo={userInfo} bookID={item.bookID} bookTitle={item.title} bookImg={item.img} qty={item.qty} totalPriceUSD={item.totalPriceUSD} dateOrdered={item.dateOrdered} address={item.address}></CartItem>)
   
    const handleOrderButtonClick = () => {
        setShowOrderPage(true);
      }; //Jiwooedit
    
      return (
        <>
          {showOrderPage ? (
            <OrderPage/>
          ) : (
            <>
              {itemsToDisplay}
              <p className="text-black">{cartTotalDue}</p>
              <button className="bg-green-400 p-4 rounded-md" onClick={handleOrderButtonClick}>
                Order
              </button>
            </>
          )}
        </>
      ); //Jiwooedit

}