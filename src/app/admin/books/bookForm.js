'use client'

import { useState , useEffect, useRef} from "react"
import { Dialog, Disclosure } from '@headlessui/react'
import RowAction from "../components/rowAction"

export default function BookForm({className, genres}){
    let [isOpen, setIsOpen] = useState(false)
    const formBook = useRef()
    const checkBoxVal = useRef()
    // function OpenModal(){
    //     setIsOpen(true)
    // }


    function handleSubmit(e){
        e.preventDefault()
        console.log("checkBoxVal", checkBoxVal.current)
        console.log(formBook.current)
        const data =  new FormData(formBook.current)
        for (var [key, value] of data.entries()) { 
            console.log(key, value);
        }
        console.log("formBookSubmission",data.get('bookTitle'))
        setIsOpen(false)
    }


   
        return(
            <>
                <button className={className} onClick={()=>setIsOpen(true)}>Add a new book</button>


                <Dialog open={isOpen} onClose={() => {}} as='div' className='text-black'>

                

                    <div className="fixed inset-0 bg-black/70 z-40" aria-hidden="true" />

                    <Dialog.Panel as='div' style={{top:' 50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='p-[20px] bg-white rounded-md w-4/5 sm:w-3/5 lg:w-1/4 fixed z-50'>
                   
                        <Dialog.Title className='text-center mb-3 font-semibold'>Add new book</Dialog.Title>

                        <Dialog.Description className='text-justify font-light'>
                            Input the required information for the new book
                        </Dialog.Description>

                        <form ref={formBook} className='flex flex-col'>
                            <div className='flex flex-col my-3'>
                                <label htmlFor="bookTitle">Title</label>
                                <input type='text' id='bookTitle' name='bookTitle' className="bg-slate-200"></input>
                            </div> 
                            <div className='flex flex-col my-3'>
                                <label htmlFor='bookDesc'>Description</label>
                                <textarea id='bookDesc' name="bookDesc" className="bg-slate-200"></textarea>
                            </div>
                            <div className='flex flex-col my-3'>                                
                                        <label>Select a genre</label>
                                        <div ref={checkBoxVal} className="flex flex-col max-h-32 overflow-x-auto border">
                                            {genres.map((genre, index)=>{
                                                return <div key={index}> <input name={genre.name} id={genre.name} value={genre.genreID} type="checkbox"></input> <label>{genre.name}</label></div>
                                            })}
                                        </div>

                            </div>
                            <div className='flex flex-col my-3'>
                                <label htmlFor="bookImg">Image</label>
                                <div className='flex flex-col mt-2'>
                                    <input className="bg-slate-200 mb-1" id='bookImg' name='bookImg' type='file'/> 
                                    <p className='text-justify'>Or</p>
                                    <input className="bg-slate-200 mt-1" id='bookImg2' name='bookImg2' type='text' placeholder="Enter a URL to an image"/> 
                                </div>
                                 
                            </div>
                            <div className='flex flex-col my-3'>
                                <label htmlFor="bookPrice">Price</label>
                                <input id='bookPrice' name='bookPrice' type='number' className="bg-slate-200 w-1/3" ></input>
                            </div>
                            <div className='flex flex-col my-3'>
                                <label htmlFor="bookAuthors">Author/s</label>
                                <input id='bookAuthors' name='bookAuthors' type='text' className="bg-slate-200"></input>
                            </div>
       
                            <div className='flex flex-row justify-end'>
                                <button className="mr-3 bg-slate-300 p-1 rounded-md font-semibold text-slate-500" name='cancel' id='cancel' onClick={() => setIsOpen(false)}>Cancel</button>
                                <button type='submit' className="mr-1 bg-green-500 p-1 rounded-md text-white font-semibold" name='submitButton' id='submitButton' onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </Dialog.Panel>
                    
                </Dialog>
                
            </>
        )
    
}