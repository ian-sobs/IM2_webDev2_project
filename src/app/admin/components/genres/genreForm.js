'use client'

import {useRef} from "react"
import { Dialog} from '@headlessui/react'
import {recurseSearchTagname} from '../recurseTagname'


export default function genreForm({rowID_in_form, setRowID_in_form, forEditing,setForEditing,addRow,updateRow, isOpen, setIsOpen, className}){
    // let [isOpen, setIsOpen] = useState(false)
    const genreName = useRef()
    const imageFile = useRef()
    // function OpenModal(){
    //     setIsOpen(true)
    // }


    function handleSubmit(e){
        e.preventDefault()
        // console.log("checkBoxVal", checkBoxVal.current)
        // let objPost = {}
        // let arr = recurseSearchTagname('input', checkBoxVal.current)
        // let genreIDs = []
        // arr.forEach(element => {
        //     if(element.checked){
        //         genreIDs.push(parseInt(element.value))
        //     }
        // });

        
        let data
            
        // for (var [key, value] of data.entries()) { 
        //     objPost[key] = value
        //     console.log(key, value)
        // }
        // objPost['genreIDs'] = genreIDs
        // console.log('Fetch post object', objPost)
        data.genreName = genreName.current.value
        data.genreID = rowID_in_form

        if(forEditing){
            updateRow(data)
        }
        else{
            addRow(data)
        }
    }
    return(
        <>
            <div>
            <button className={className} onClick={()=>setIsOpen(true)}>Add a new book</button>


            <Dialog open={isOpen} onClose={() => {}} as='div' className='text-black'>



                <div className="fixed inset-0 bg-black/70 z-40" aria-hidden="true" />

                <Dialog.Panel as='div' style={{top:' 50%', left: '50%', transform: 'translate(-50%, -50%)'}} className='p-[20px] bg-white rounded-md w-4/5 sm:w-3/5 lg:w-1/4 fixed z-50'>
            
                    <Dialog.Title className='text-center mb-3 font-semibold'>{(!forEditing) ? "Add new genre" : "Edit this genre"}</Dialog.Title>

                    <Dialog.Description className='text-justify font-light'>
                        {(!forEditing) ? "Input the required information for the new genre" : "Edit this genre's information"}
                    </Dialog.Description>

                    <form className='flex flex-col'>
                        <div className='flex flex-col my-3'>
                            <label htmlFor="genreName">Name</label>
                            <input ref={genreName} type='text' id='genreName' name='genreName' className="bg-slate-200"></input>
                        </div> 
                        {/* <div className='flex flex-col my-3'>
                            <label htmlFor='bookDesc'>Description</label>
                            <textarea id='bookDesc' name="bookDesc" className="bg-slate-200"></textarea>
                        </div> */}
                        {/* <div className='flex flex-col my-3'>                                
                                    <label>Select a genre</label>
                                    <div ref={checkBoxVal} className="flex flex-col max-h-32 overflow-x-auto border">
                                        {genres.map((genre, index)=>{
                                            return <div key={index}> <input name={genre.name} id={genre.name} value={genre.genreID} type="checkbox"></input> <label>{genre.name}</label></div>
                                        })}
                                    </div>

                        </div> */}
                        {/* <div className='flex flex-col my-3'>
                            <label >Image</label>
                            <div className='flex flex-col mt-2'>
                                <input ref={imageFile} className="bg-slate-200 mb-1" id='bookImgFile' name='bookImgFile' type='file' accept='.png, .jpeg, .jpg, .svg'/> 
                                <p className='text-justify'>Or</p>
                                <input className="bg-slate-200 mt-1" id='bookImgLink' name='bookImgLink' type='text' placeholder="Enter a URL to an image"/> 
                            </div>
                            
                        </div> */}
                        {/* <div className='flex flex-col my-3'>
                            <label htmlFor="bookPrice">Price</label>
                            <input id='bookPrice' name='bookPrice' type='number' className="bg-slate-200 w-1/3" ></input>
                        </div>
                        <div className='flex flex-col my-3'>
                            <label htmlFor="bookAuthors">Author/s</label>
                            <input id='bookAuthors' name='bookAuthors' type='text' className="bg-slate-200"></input>
                        </div> */}

                        <div className='flex flex-row justify-end'>
                            <button className="mr-3 bg-slate-300 p-1 rounded-md font-semibold text-slate-500" name='cancel' id='cancel' onClick={() => {
                                setIsOpen(false)
                                setForEditing(false)
                                setRowID_in_form(0)
                                }}>Cancel</button>
                            <button type='submit' className="mr-1 bg-green-500 p-1 rounded-md text-white font-semibold" name='submitButton' id='submitButton' onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </Dialog.Panel>
                
            </Dialog>
                        
            </div>
        </>
    )
}