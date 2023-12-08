'use client'
import RowAction from "../rowAction"
import actionDetails from "../actionButDetails"
// import GenreForm from "./genreForm"

export function HeadRow({colNames, ndxToShorten, rowsCopy}){
    return (
        <>
            <tr >
                {colNames.map((col, index)=>{
                    console.log(index)
                    return (ndxToShorten == index) ? <th key={index} >{col}</th> : <th key={index} >{col}</th> 
                })}
                <th>Actions</th>
            </tr>
        </>
    )
}

export function BodyRow({rowObj, deleteRow, openUpdateModal}){
    let colData = Object.keys(rowObj)
    let rowID = rowObj.ID
    console.log("rowObj", rowObj)

    
    // const actions = [
    //     {
    //         name: 'Edit',

    //         activeBgColor: 'bg-blue-500',
    //         activeTextColor: 'text-white',
    //         behavior: editBook
    //     },
    //     {
    //         name: 'Delete',
    //         activeBgColor: 'bg-rose-600',
    //         activeTextColor: 'text-white',
    //         behavior: deleteBook
    //     }
    // ]

    const actions = [
        new actionDetails('Edit', openUpdateModal, 'bg-blue-500', 'text-white'),
        new actionDetails('Delete', deleteRow, 'bg-rose-500', 'text-white')
    ]
    return (
        <>    
            <tr className="z-1">     
                {colData.map((objProp, index)=><td key={index} >{rowObj[objProp]}</td>)}
                <td className='z-1'><RowAction rowID={rowID} positioning='absolute' actions={actions}>Action</RowAction></td>
                        
            </tr>        
        </>
    )
}	