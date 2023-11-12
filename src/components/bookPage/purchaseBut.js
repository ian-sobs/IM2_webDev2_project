'use client'

export default function purchase({currency, price}){
    return (
        <>
            <button>{`${currency}${price}`}</button>
        </>
    )
}