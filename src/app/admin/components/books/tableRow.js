'use client'
import RowAction from "../rowAction"
import actionDetails from "../actionButDetails"

export function HeadRow({colNames, ndxToShorten, rowsCopy}){
    return (
        <>
            <tr >
                {colNames.map((col, index)=><th key={index} >{col}</th>)}
                <th>Actions</th>
            </tr>
        </>
    )
}

export function BodyRow({rowObj, bookID_in_form, setBookID_in_form, ndxLink, ndxDesc, deleteBook, editBook}){
    let colData = Object.keys(rowObj)
    let bookID = rowObj['DB Index']
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
        new actionDetails('Edit', editBook, 'bg-blue-500', 'text-white'),
        new actionDetails('Delete', deleteBook, 'bg-rose-500', 'text-white')
    ]
    return (
        <>    
            <tr className="z-1">     
                {colData.map((objProp, index)=>{
                    if(index == ndxLink){ 
                        return <td key={index} className=' text-cyan-700 w-[10px]'><a target="_blank" className='hover:text-cyan-400 truncate' href={`${rowObj[objProp]}`}>Photo source</a></td>
                    }
                    else if(index == ndxDesc){
                        return <td key={index} ><div >{rowObj[objProp]}</div></td>
                    }    
                    return <td key={index} >{rowObj[objProp]}</td>
                })}
                <td className='z-1'><RowAction rowID={bookID} positioning='absolute' actions={actions}>Action</RowAction></td>
                        
            </tr>        
        </>
    )
}	