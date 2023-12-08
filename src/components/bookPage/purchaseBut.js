'use client'
import Image from 'next/image'
import cartAdd from '@/icons/addToCart.svg'
import { useState, useEffect } from 'react' 
import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'

export default function purchase(props){
    const [isOpen, setIsOpen] = useState(false)
    const [isRequest, setIsRequest] = useState(true)
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
    
    useEffect(()=>{

    }, [])

    function handleSubmit(e){
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))

        console.log(data)

        fetch("book/api/addToCart", {    
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)})
        .then((result)=>result.json())
        .then((output)=> {
            console.log("purchaseButOutput", output)
            setIsOpen(false)
            setIsRequest(false)
        })
    }

    function handleCancel(e){
<<<<<<< HEAD
        fetch("book/api/cancelDormRequest?userID=", {    
=======
        fetch("book/api/cancelDormRequest", {    
>>>>>>> 9c4be9679f9a9977f25f7bfe1efde6bc10122a70
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)})
        .then((result)=>result.json())
        .then((output)=> {
            console.log("purchaseButOutput", output)
            setIsOpen(false)
            setIsRequest(false)
        })
    }

    if(isRequest){
        return (
            <>
                <Dialog.Root open={isOpen} modal={true}>
    
                    <Dialog.Trigger asChild>
                        <button className="bg-green-500 p-[4px] px-[9px] rounded-full text-white font-semibold flex flex-row justify-center items-center" onClick={()=>setIsOpen(true)}>
                            {/* <Image src={cartAdd} className="mr-[4px]" style={style} alt="AddToCart"></Image> */}
                            <div className="flex flex-row">
                                {/* <span className="mr-[4px]">{"PHP "}</span>
                                {`${props.bookInfo.priceUSD}`} */}
                                Request
                            </div>
                        </button>
                    </Dialog.Trigger>  
    
                    <Dialog.Portal >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75 z-40" style={{}}> </Dialog.Overlay>
    
                        <Dialog.Content className="flex flex-col text-black" style={dialogContent}>
                            <>
                            <Dialog.Title className="text-center font-semibold mb-[10px] text-lg tracking-wide">
                                Order details
                            </Dialog.Title>
    
                                
                            <Form.Root className='flex flex-col justify-center mb-[8px]' onSubmit={handleSubmit}>
                                {/* <Form.Field className='flex flex-row items-center mb-[8px]' name="prodQuant">
                                        <Form.Label className='mr-[10px]'>Quantity</Form.Label>
                                        <Form.Control className='w-[60px] bg-slate-200 p-[4px] rounded-sm' asChild><input type="number" min="1" value={prodQuant} onChange={(e)=>setProdQuant(e.target.value)}></input></Form.Control>
                                </Form.Field> */}
    {/* 
                                <div className='flex flex-row items-center mb-[14px]'>
                                    <p className='mr-[7px]'>Total price: </p> <span className='text-green-500 font-semibold'>{`PHP ${(props.bookInfo.priceUSD * prodQuant).toFixed(2)}`}</span>
                                </div> */}
    
                                 <Form.Field className='flex flex-col items-center mb-[8px]' name="message">
                                    <div className="flex flex-row justify-between items-center">    
                                        <Form.Label asChild className='mr-[10px] self-start text-left'>
                                            <div className='w-full text-left'>
                                                Message
                                            </div>
                                        </Form.Label>
                                        <Form.Message className="text-sm font-light" match="valueMissing"> Address should not be empty </Form.Message>
                                    </div>
                                    <Form.Control className='w-full bg-slate-200 p-[4px] rounded-sm h-36' asChild><textarea type="text"></textarea></Form.Control>
                                </Form.Field>
    {/* 
                                <Form.Field name="totalPrice" asChild>
                                    <Form.Control asChild><input type="number" value={(props.bookInfo.priceUSD * prodQuant).toFixed(2)} hidden></input></Form.Control>
                                </Form.Field> */}
    
                                <Form.Field name="userID" asChild>
                                    <Form.Control asChild><input type="number" value={parseInt(props.userInfo.usr)} hidden></input></Form.Control>
                                </Form.Field>
    
                                <Form.Field name="bookID" asChild>
                                    <Form.Control asChild><input type="number" value={parseInt(props.bookInfo.bookID)} hidden></input></Form.Control>
                                </Form.Field>
    
                                <div className="flex flex-row justify-end mt-[8px]">
                                    <Dialog.Close className="bg-stone-300 p-[7px] rounded-md" onClick={()=>{
                                        setIsOpen(false)
                                        setProdQuant(1)
                                    }}> 
                                        Cancel
                                    </Dialog.Close>
                                    <Form.Submit className="bg-green-500 p-[7px] text-white rounded-md ml-[15px]">
                                        Add to cart
                                    </Form.Submit>
                                </div>
    
                            </Form.Root>
                            </>
    
                        </Dialog.Content>
                    </Dialog.Portal>    
                </Dialog.Root>
            </>
        )
    }

    return (
    <button className="bg-rose-600 p-[4px] px-[9px] rounded-full text-white font-semibold flex flex-row justify-center items-center" onClick={handleCancel}>

        Cancel
    </button>)
    
}