'use client'
import {HeadRow, BodyRow} from './tableRow'
import { useState, useEffect } from 'react'
// import RowAction from './rowAction'
// import GenreForm from './genreForm'

export default function TableFull({rowID}){
    const [rows, setRows] = useState([])
    const [caption, setCaption] = useState("")
    const colNames = ["User ID", "Email", "First name", "Last name", "Actions"]
    useEffect(()=>{
        fetch(`/admin/assginments/api/getDormmates?rowID=${rowID}`)
        .then((result)=>result.json())
        .then((output)=>{
            setRows(output)
        })

        fetch(`/admin/assginments/api/getRoom?rowID=${rowID}`)
        .then((result)=>result.json())
        .then((output)=>{
            
            setCaption(output.title)
        })

    }, [])

    const [forEditing, setForEditing] = useState(false)
    const [rowID_in_form, setRowID_in_form] = useState(0)

    let rowsCopy = [...rows]
    console.log('rowsCopy', rowsCopy)

    // function tbodyHandler(newRows){
    //     setRows(newRows)
    // }

    // function deleteRow(rowID){
    //     fetch('/admin/genres/api/deleteGenre', {
    //         method: "POST",
    //         headers: new Headers({'content-type': 'application/json'}),
    //         body: JSON.stringify({rowID: rowID})
    //     })
    //     .then((result)=>result.json())
    //     .then((parsedRes)=>{
    //         if(parsedRes.affectedRows == 1){
    //             let newBody = rowsCopy.filter((rowCopy)=>rowCopy.ID != rowID)
    //             setRows(newBody)
    //             if(newBody.length == 0){
    //                 location.reload()
    //             }
    //         }
    //     })
    // }

    // function addRow(newRow){
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
    function removeUser(rowID){
        fetch("/admin/assginments/api/removeUser", {            
            method: "POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify({usrID: rowID})
        })
        .then((result)=>result.json())
        .then((output)=>{
            if(output.removedProperly){
                let newArr = rowsCopy.filter((row)=>row.usrID != rowID)
                setRows(newArr)
            }
        })
    }


    return(
        <>
        
        {/* <RowAction actions={genreList} positioning='absolute'>Select genre</RowAction> */}
        <table className="mx-auto shadow-lg table-fixed text-black bg-white border-separate border-spacing-y-[50px] border-spacing-x-9 z-1">
            <caption className="caption-top mb-5 text-slate-400">
                {caption +" occupant/s"}
            </caption>
            <thead>
                <HeadRow colNames={colNames} ndxToShorten={4}></HeadRow>
            </thead>
            <tbody>
                {rows.map((rowObj, index)=><BodyRow removeUser={removeUser} rowObj={rowObj}></BodyRow>)}
            </tbody>
        </table>        
        

        <div className='bg-inherit h-32'></div>
                    {/* <button onClick={GenreForm}></button> */}
        {/* <GenreForm rowID_in_form={rowID_in_form} setRowID_in_form={setRowID_in_form} forEditing={forEditing} setForEditing={setForEditing} addRow={addRow} updateRow={updateRow} isOpen={isOpen} setIsOpen={setIsOpen} className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'>Add a new accommodation </GenreForm> */}

        
        </>

    )

}