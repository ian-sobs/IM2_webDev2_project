'use client'
import {HeadRow, BodyRow} from './tableRow'
import { useState } from 'react'
import RowAction from '../rowAction'
import BookForm from './bookForm'

export default function TableFull({genres, colNames, rowsData, caption, genreList}){
    const [rows, setRows] = useState(rowsData)
    const [isOpen, setIsOpen] = useState(false)

    const [forEditing, setForEditing] = useState(false)
    const [bookID_in_form, setBookID_in_form] = useState(0)

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
                let newBody = rowsCopy.filter((rowCopy)=>rowCopy['DB Index'] != bookID)
                console.log("newBody.length", newBody.length)
                setRows(newBody)
                if(newBody.length == 0){
                    location.reload()
                }
                

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
            if('bookDisplay' in parsed){
                setIsOpen(false)
                rowsData.push(parsed.bookDisplay)
                setRows(rowsData)
            }
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
        setBookID_in_form(bookID)
        setIsOpen(true)
    }

    function updateBook(newBookDetails){
        fetch('/admin/books/api/updateBook', {
            method: "POST",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: newBookDetails
        })
        .then((response)=>response.json())
        .then((parsed)=>{
            console.log("parsedResponse", parsed)
                console.log("updateBookData", rowsCopy)
                console.log("updateBookParsed", parsed)
                let updatedRows = rowsCopy.map((data)=>{
                    console.log("data", data)
                    if(data['DB Index'] == parsed.bookDisplay['DB Index']){
                        console.log("parsed.bookDisplay", parsed.bookDisplay)
                        return parsed.bookDisplay
                    }
                    else{
                        console.log("data", data)
                        return data
                    }
                    
                })
                console.log('updatedRows', updatedRows)
                setRows(updatedRows)
                setForEditing(false)
                setBookID_in_form(0)
                setIsOpen(false)
            
        }) 
    }

    return(
        <>
        {/* <div className='flex justify-center overflow-x-auto relative z-1'> */}
        {/* <RowAction actions={genreList} positioning='absolute'>Select genre</RowAction> */}
            <table className="mx-auto shadow-lg z-1 table-fixed text-black bg-white border-separate border-spacing-y-[50px] border-spacing-x-9 z-1">
                <caption className="caption-top mb-5 text-slate-400">
                    {caption}
                </caption>
                <thead>
                    <HeadRow colNames={colNames} ndxToShorten={4}></HeadRow>
                </thead>
                <tbody>
                    {rows.map((rowObj, index)=><BodyRow bookID_in_form={bookID_in_form} setBookID_in_form={setBookID_in_form} isOpen={isOpen} setIsOpen={setIsOpen} rowsCopy={rowsCopy} deleteBook={deleteBook} editBook={editBook} key={index} rowObj={rowObj} ndxLink={6}></BodyRow>)}
                </tbody>
            </table>        
        {/* </div> */}

        <div className='bg-inherit h-20'></div>
                    {/* <button onClick={BookForm}></button> */}
        <BookForm bookID_in_form={bookID_in_form} setBookID_in_form={setBookID_in_form} forEditing={forEditing} setForEditing={setForEditing} addBook={addBook} updateBook={updateBook} isOpen={isOpen} setIsOpen={setIsOpen} genres={genres} className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'>Add a new book</BookForm>

        
        </>

    )

}