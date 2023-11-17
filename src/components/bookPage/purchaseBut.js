'use client'
import Image from 'next/image'
import cartAdd from '@/icons/addToCart.svg'
import { useState } from 'react' 
import { Dialog } from '@headlessui/react'

export default function purchase(props){
    let [isOpen, setIsOpen] = useState(false)
    let style = {
        filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
    }
    return (
        <>
            <button className="bg-green-500 p-[4px] px-[9px] rounded-full text-white font-semibold flex flex-row justify-center items-center" onClick={()=>setIsOpen(true)}>
                <Image src={cartAdd} className="mr-[4px]" style={style} alt="AddToCart"></Image>
                <div className="flex flex-row">
                    <span className="mr-[4px]">{`${props.userInfo.crrncyCode}`}</span>
                    {`${props.bookInfo.priceUSD}`}
                </div>
            </button>

            <Dialog open={isOpen} onClose={()=>setIsOpen(false)} className="relative z-50">
                
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-sm rounded bg-white">
                        <Dialog.Title>Complete your order</Dialog.Title>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}