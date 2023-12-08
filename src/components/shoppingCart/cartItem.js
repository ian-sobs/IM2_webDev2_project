'use client'
import Image from "next/image"

//This is the component that displays information about the book that was added to the cart
export default function cartItem({userInfo, bookID, bookTitle, bookImg, qty, totalPriceUSD, dateOrdered, address}){
    let d = new Date(dateOrdered);
    console.log(typeof(d))

    return(
        <>
            <div className='text-black flex flex-col sm:flex-row h-2/5 p-4 bg-white m-3 justify-evenly shadow-lg rounded-md w-fit'>
                <Image src={bookImg} width={300} height={102} alt={bookTitle}></Image>

                <div className="flex flex-col ml-4 justify-center">
                    <h1 className="mb-3">{bookTitle}</h1>
                    
                    <p className="mb-3">Quantity: {qty}</p>
                    <p className="mb-3">Total price: {`PHP ${totalPriceUSD}`}</p>
                    <p className="mb-3">Date added: {d.toLocaleString()}</p>    
                    <p className="mb-3">Address: {address}</p>
                    
                    <div className="flex flex-row justify-between">
                        <button className="bg-red-400 p-2" onClick={()=>console.log(userInfo.usr)}>Remove from cart</button>
                        <button className="bg-blue-400 p-2">View book page</button>
                    </div>
                   
                </div>

            </div>

        </>
    )
}