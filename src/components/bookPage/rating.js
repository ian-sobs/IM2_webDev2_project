'use client'
import { useState, useEffect } from 'react' 
import * as Dialog from '@radix-ui/react-dialog'
import * as Form from '@radix-ui/react-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import GiveRating from './GiveRating'

export default function RateBut({bookID, userID}){
    const [isOpen, setIsOpen] = useState(false)
    const [starCount, setStarCount] = useState(0)
    useEffect(()=>{
        fetch(`/user/book/api/rateBook?bookID=${bookID}&userID=${userID}`)
        .then((result)=>result.json())
        .then((output)=>{
            if(Object.keys(output).length > 0){
                let rateVal = parseFloat(parseFloat(output.ratingVal).toFixed(2))
                if((rateVal - Math.floor(rateVal)) < 0.5) rateVal = Math.floor(rateVal)
                else rateVal = Math.ceil(rateVal)
                setStarCount(rateVal)
                console.log("rating", output)
            }
        })
    }, [])

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

    // const uncolored = {
    //     color: 'gray',
    //     fontSize: '20px'
    // }

    // const colored ={
    //     color: 'orange',
    //     fontSize: '20px'        
    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     const data = Object.fromEntries(new FormData(e.currentTarget))

    //     console.log(data)

    //     fetch("book/api/addToCart", {    
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)})
    //     .then((result)=>result.json())
    //     .then((output)=> {
    //         console.log("purchaseButOutput", output)
    //         setIsOpen(false)
    //     })
    // }

    return (
        <>
            <Dialog.Root open={isOpen} modal={true}>

                <Dialog.Trigger asChild>
                    <button className="bg-gray-200 p-[4px] px-[9px] rounded-full text-amber-500 hover:bg-amber-500 hover:text-white font-semibold flex flex-row justify-center items-center" onClick={()=>setIsOpen(true)}>
                      <FontAwesomeIcon className="m-[3px] w-[20px]" icon={faStar} />
                      <p className="m-[3px]">Rate</p>
                    </button>
                </Dialog.Trigger>  

                <Dialog.Portal >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-75 z-40" style={{}}> </Dialog.Overlay>

                    <Dialog.Content className="flex flex-col text-black items-center" style={dialogContent}>
                        <>
                        <Dialog.Title className="text-center font-semibold mb-[10px] text-lg tracking-wide">
                            Rate the book
                        </Dialog.Title>
                       
                        <div className="mt-[10px]">
                          <GiveRating bookID={bookID} userID={userID} starRating={starCount}></GiveRating>
                        </div>
                        
                        <div className="flex flex-row justify-end mt-[28px]">
                                <Dialog.Close className="bg-stone-300 p-[7px] rounded-md" onClick={()=>{
                                    setIsOpen(false)
                                    
                                }}> 
                                    Cancel
                                </Dialog.Close>

                        </div>
                            
                        {/* <Form.Root className='flex flex-col justify-center mb-[8px]' onSubmit={handleSubmit}>
                            <Form.Field className='flex flex-row items-center mb-[8px]' name="prodQuant">
                                    <Form.Label className='mr-[10px]'>Quantity</Form.Label>
                                    <Form.Control className='w-[60px] bg-slate-200 p-[4px] rounded-sm' asChild><input type="number" min="1" value={prodQuant} onChange={(e)=>setProdQuant(e.target.value)}></input></Form.Control>
                            </Form.Field>

                            <div className='flex flex-row items-center mb-[14px]'>
                                <p className='mr-[7px]'>Total price: </p> <span className='text-green-500 font-semibold'>{`${props.userInfo.crrncyCode} ${(props.bookInfo.priceUSD * prodQuant * 56).toFixed(2)}`}</span>
                            </div>

                             <Form.Field className='flex flex-row items-center mb-[8px]' name="address">
                                <div className="flex flex-row justify-between items-center">    
                                    <Form.Label className='mr-[10px]'>Address</Form.Label>
                                    <Form.Message className="text-sm font-light" match="valueMissing"> Address should not be empty </Form.Message>
                                </div>
                                <Form.Control className='w-full bg-slate-200 p-[4px] rounded-sm' asChild><input type="text"></input></Form.Control>
                            </Form.Field>

                            <Form.Field name="totalPrice" asChild>
                                <Form.Control asChild><input type="number" value={(props.bookInfo.priceUSD * prodQuant).toFixed(2)} hidden></input></Form.Control>
                            </Form.Field>

                            <Form.Field name="userID" asChild>
                                <Form.Control asChild><input type="number" value={parseInt(props.userInfo.userID)} hidden></input></Form.Control>
                            </Form.Field>

                            <Form.Field name="bookID" asChild>
                                <Form.Control asChild><input type="number" value={parseInt(props.bookInfo.bookID)} hidden></input></Form.Control>
                            </Form.Field>

                            <div className="flex flex-row justify-end mt-[8px]">
                                <Dialog.Close className="bg-stone-300 p-[7px] rounded-md" onClick={()=>{
                                    setIsOpen(false)
                                    
                                }}> 
                                    Cancel
                                </Dialog.Close>
                                <Form.Submit className="bg-green-500 p-[7px] text-white rounded-md ml-[15px]">
                                    Add to cart
                                </Form.Submit>
                            </div>

                        </Form.Root> */}
                        </>

                    </Dialog.Content>
                </Dialog.Portal>    
            </Dialog.Root>
        </>
    )
}