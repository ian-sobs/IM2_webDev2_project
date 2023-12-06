'use client'
import CartItem from "./cartItem"
import { useState , useEffect } from "react"
import OrderPage from "../orderPage/orderDisplay";  //Jiwooedit

export default function cartItemDisplay({userInfo}){
    //backend dependent code starts here
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
    //backend dependent code end here


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
              <p className="text-black my-[20px]"><span className="text-black font-semibold">Total Amount: </span>{cartTotalDue}</p>
              <button className="bg-green-400 w-48 p-2 rounded-md mb-4" onClick={handleOrderButtonClick}>
                Order
              </button>

              <div className="flex flex-wrap">
                
                {itemsToDisplay}
              </div>

            </>
          )}
        </>
      ); //Jiwooedit

}