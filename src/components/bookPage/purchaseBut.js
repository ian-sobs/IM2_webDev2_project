'use client'
import Image from 'next/image'
import cartAdd from '@/icons/addToCart.svg'
import { useState } from 'react' 
import * as Dialog from '@radix-ui/react-dialog';

export default function purchase(props){
    let [isOpen, setIsOpen] = useState(false)
    let style = {
        filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
    }
    return (
        <>


            <Dialog.Root>

                <Dialog.Trigger>
                    <button className="bg-green-500 p-[4px] px-[9px] rounded-full text-white font-semibold flex flex-row justify-center items-center" onClick={()=>setIsOpen(true)}>
                        <Image src={cartAdd} className="mr-[4px]" style={style} alt="AddToCart"></Image>
                        <div className="flex flex-row">
                            <span className="mr-[4px]">{`${props.userInfo.crrncyCode}`}</span>
                            {`${props.bookInfo.priceUSD}`}
                        </div>
                    </button>
                </Dialog.Trigger>  
                
                <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content>
                    <Dialog.Title />
                    <Dialog.Description />
                    <Dialog.Close />
                </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}