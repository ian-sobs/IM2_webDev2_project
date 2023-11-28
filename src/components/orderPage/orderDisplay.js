'use client'

import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import check from '@/icons/checkicon.png';
import OrderSummary from './orderSummary'; 
const OrderPage = () => {


 return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginTop: "10px"}}>
        <Image src={check} alt="Check Icon" width={100} height={100} className="check" />
        <h1 style={{ color: "black", fontSize: "25px" }}>Your Order has been received.</h1>
        <h2 style={{ color: "black", fontSize : "18px", paddingLeft: "180px", paddingRight: "150px"}}>Thank you for your order. We will begin processing it right away, 
        You will be received an order confirmation email Shortly at (email).</h2> 
        <div style={{ width: "100%", borderBottom: "1px solid black", marginTop: "40px",marginBottom: "40px"}}></div>
      </div>
      <OrderSummary />
    </div>
 );
};

export default OrderPage;