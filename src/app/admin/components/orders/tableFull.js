'use client'
import {HeadRow, BodyRow} from './tableRow'
import { useState } from 'react'
import RowAction from '../rowAction'

export default function TableFull({colNames, rowsData, caption}){
    const [rows, setRows] = useState(rowsData)
    const [isOpen, setIsOpen] = useState(false)

    const [forEditing, setForEditing] = useState(false)
    const [rowID_in_form, setRowID_in_form] = useState(0)

    let rowsCopy = [...rows]
    console.log('rowsCopy', rowsCopy)

    // function tbodyHandler(newRows){
    //     setRows(newRows)
    // }

    function reject(rowID){
        fetch('/admin/requests/api/reject', {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({rowID: rowID})
        })
        .then((result)=>result.json())
        .then((parsedRes)=>{

                location.reload()
                
            
        })
    }
 
    function approve(rowID){
        fetch('/admin/requests/api/approve', {
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({rowID: rowID})
        })
        .then((result)=>result.json())
        .then((parsedRes)=>{
            location.reload()
            if(parsedRes.approve){
                let newBody = rowsCopy.filter((rowCopy)=>rowCopy.ID != rowID)
                setRows(newBody)
                
                    location.reload()
                
            }
        })
    }

    // function approve(newRow){
    //     fetch('/admin/genres/api/newGenre', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newRow)
    //     })
    //     .then((response)=>response.json())
    //     .then((parsed)=>{
    //         console.log("parsedResponse", parsed)
    //         if(parsed.sqlHeader.insertId > 0){
    //             setIsOpen(false)
    //             rowsData.push(parsed.toDisplay)
    //             setRows(rowsData)
    //         }
    //     }) 
    // }

    // function openUpdateModal(rowID){
    //     // apiLink: 'Edit',
    //     // fetchOptions: {
    //     //     method: "POST",
    //     //     headers: new Headers({'content-type': 'application/json'}),
    //     //     body: JSON.stringify({rowID: rowID})
    //     // },
    //     setForEditing(true)
    //     setRowID_in_form(rowID)
    //     setIsOpen(true)
    // }

    // function updateRow(newRowDetails){
    //     fetch('/admin/genres/api/updateGenre', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newRowDetails)
    //     })
    //     .then((response)=>response.json())
    //     .then((parsed)=>{
    //         console.log("parsedResponse", parsed)
            
    //             let updatedRows = rowsCopy.map((data)=>{
    //                 if(data.ID == parsed.toDisplay.ID){
    //                     console.log("parsed.toDisplay", parsed.toDisplay)
    //                     return parsed.toDisplay
    //                 }
    //                 else{
    //                     console.log("data", data)
    //                     return data
    //                 }
                    
    //             })
    //             console.log('updatedRows', updatedRows)
    //             setRows(updatedRows)
    //             setForEditing(false)
    //             setRowID_in_form(0)
    //             setIsOpen(false)
            
    //     }) 
    // }

    return(
        <>
        
        {/* <RowAction actions={genreList} positioning='absolute'>Select genre</RowAction> */}
        <table className="mx-auto shadow-lg table-fixed text-black bg-white border-separate border-spacing-y-[50px] border-spacing-x-9 z-1">
            <caption className="caption-top mb-5 text-slate-400">
                {caption}
            </caption>
            <thead>
                <HeadRow colNames={colNames} ndxToShorten={4}></HeadRow>
            </thead>
            <tbody>
                {rows.map((rowObj, index)=><BodyRow rowsCopy={rowsCopy} reject={reject} approve={approve} key={index} rowObj={rowObj}></BodyRow>)}
            </tbody>
        </table>        
        

        <div className='bg-inherit h-20'></div>
                    {/* <button onClick={GenreForm}></button> */}
        {/* <GenreForm rowID_in_form={rowID_in_form} setRowID_in_form={setRowID_in_form} forEditing={forEditing} setForEditing={setForEditing} addRow={addRow} updateRow={updateRow} isOpen={isOpen} setIsOpen={setIsOpen} className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'>Add a new genre </GenreForm> */}

        
        </>

    )

}