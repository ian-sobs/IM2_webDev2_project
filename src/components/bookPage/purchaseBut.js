'use client'
import Image from 'next/image'
import cartAdd from '@/icons/addToCart.svg'
import { useState } from 'react' 
import * as Dialog from '@radix-ui/react-dialog';

export default function purchase(props){
    const [isOpen, setIsOpen] = useState(false)
    const [prodQuant, setProdQuant] = useState(1)
    let style = {
        filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
    }

    let dialogContent = {
            backgroundColor: "white",
            borderRadius: "6px",
            boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            maxWidth: "450px",
            maxHeight: "85vh",
            padding: "17px",
            animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: "70"
    }
    return (
        <>


            <Dialog.Root open={isOpen} modal={true}>

                <Dialog.Trigger asChild>
                    <button className="bg-green-500 p-[4px] px-[9px] rounded-full text-white font-semibold flex flex-row justify-center items-center" onClick={()=>setIsOpen(true)}>
                        <Image src={cartAdd} className="mr-[4px]" style={style} alt="AddToCart"></Image>
                        <div className="flex flex-row">
                            <span className="mr-[4px]">{`${props.userInfo.crrncyCode}`}</span>
                            {`${props.bookInfo.priceUSD}`}
                        </div>
                    </button>
                </Dialog.Trigger>  

                <Dialog.Portal >
                <Dialog.Overlay asChild>
                    <div className="fixed inset-0 bg-black opacity-75 z-40" aria-hidden="true" />
                </Dialog.Overlay>
                <Dialog.Content asChild style={dialogContent}>

                    <div className="flex flex-col text-black">
                        <Dialog.Title className="text-center font-semibold mb-[10px] text-lg tracking-wide">
                            Order details
                        </Dialog.Title>

                        <form >
                            <div className='flex flex-row items-center mb-[8px]'>
                                <label htmlFor='prodQuant' className=' mr-[10px]'>Quantity</label>
                                <input id='prodQuant' name='prodQuant' value={prodQuant} type="number" className='w-[60px] bg-slate-200 p-[4px] rounded-sm' onChange={(e)=>setProdQuant(e.target.value)}></input>
                            </div>
                            <div className='flex flex-row items-center mb-[14px]'>
                                <p className='mr-[7px]'>Total price: </p> <span className='text-green-500 font-semibold'>{`${props.userInfo.crrncyCode} ${(props.bookInfo.priceUSD * prodQuant * 56).toFixed(2)}`}</span>
                            </div>
                            <div className='flex flex-col justify-center mb-[8px]'>
                                <label htmlFor='address' className=' mr-[10px]' >Address</label>
                                <input id='address' name='address' type="text" className=' bg-slate-200 p-[4px] rounded-sm' ></input>
                            </div>

                        </form>

                        <div className="flex flex-row justify-end mt-[8px]">
                            <Dialog.Close className="bg-stone-300 p-[7px] rounded-md" onClick={()=>setIsOpen(false)}> 
                                Cancel
                            </Dialog.Close>
                            <button className="bg-green-500 p-[7px] text-white rounded-md ml-[15px]">Add to cart</button>
                        </div>

                    </div>

                </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}