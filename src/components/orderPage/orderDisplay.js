'use client'

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import check from '@/icons/checkicon.png';
import OrderSummary from './orderSummary'; 
const OrderPage = () => {


 return (
    <div>
      <div className = "flex items-center justify-center mt-[10px] mb-[20px]">
        <Image src={check} alt="Check Icon" width={100} height={100} className="check" />
        <h1 className="text-black-600 text-xl font-bold">Your Order has been received.</h1>
      </div>

      <h2 style={{ color: "black", fontSize : "18px", paddingLeft: "180px", paddingRight: "150px", width:"70%", margin:"auto", textAlign:"center"}}>Thank you for your order. We will begin processing it right away, 
        You will be received an order confirmation email Shortly at (email).</h2> 

      <OrderSummary />
      
    </div>
 );
};

export default OrderPage;