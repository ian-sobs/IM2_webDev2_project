'use client'
import {HeadRow, BodyRow} from './tableRow'
import { useState } from 'react'
import RowAction from './rowAction'
import BookForm from '../books/bookForm'

export default function TableFull({genres, colNames, rowsData, caption, genreList}){
    const [rows, setRows] = useState(rowsData)
    const [isOpen, setIsOpen] = useState(false)

    const [forEditing, setForEditing] = useState(false)

    let rowsCopy = [...rows]
    console.log('rowsCopy', rowsCopy)

    // function tbodyHandler(newRows){
    //     setRows(newRows)
    // }

    function deleteBook(bookID){
        fetch('/admin/books/api/deleteBook', {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({bookID: bookID})
        })
        .then((result)=>result.json())
        .then((parsedRes)=>{
            if(parsedRes.affectedRows == 1){
                let newBody = rowsCopy.filter((rowCopy)=>rowCopy.ID != bookID)
                setRows(newBody)
            }
        })
    }

    function addBook(newBook){
        fetch('/admin/books/api/newBook', {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: newBook
        })
        .then((response)=>response.json())
        .then((parsed)=>{
            console.log("parsedResponse", parsed)
            setIsOpen(false)
        }) 
    }

    function editBook(bookID){
        // apiLink: 'Edit',
        // fetchOptions: {
        //     method: "POST",
        //     headers: new Headers({'content-type': 'application/json'}),
        //     body: JSON.stringify({bookID: bookID})
        // },
        setForEditing(true)
        setIsOpen(true)
    }

    function updateBook(newBookDetails){
        fetch('/admin/books/api/updateBook', {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: newBook
        })
        .then((response)=>response.json())
        .then((parsed)=>{
            console.log("parsedResponse", parsed)
            setForEditing(false)
            setIsOpen(false)
        }) 
    }

    return(
        <>
        <div className='w-full overflow-x-auto shadow-lg z-1 relative'>
        <RowAction actions={genreList} positioning='absolute'>Select genre</RowAction>
        <table className="table-fixed text-black bg-white border-separate border-spacing-y-[50px] border-spacing-x-9 z-1">
            <caption className="caption-top mb-5 text-slate-400">
                {caption}
            </caption>
            <thead>
                <HeadRow colNames={colNames} ndxToShorten={4}></HeadRow>
            </thead>
            <tbody>
                {rows.map((rowObj, index)=><BodyRow isOpen={isOpen} setIsOpen={setIsOpen} rowsCopy={rowsCopy} deleteBook={deleteBook} editBook={editBook} key={index} rowObj={rowObj} ndxLink={4}></BodyRow>)}
            </tbody>
        </table>        
        </div>

        <div className='bg-inherit h-20'></div>
                    {/* <button onClick={BookForm}></button> */}
        <BookForm forEditing={forEditing} setForEditing={setForEditing} addBook={addBook} updateBook={updateBook} isOpen={isOpen} setIsOpen={setIsOpen} genres={genres} className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'> </BookForm>

        
        </>

    )

}