'use client'
// import RowAction from "../rowAction"
// import actionDetails from "../actionButDetails"
// import GenreForm from "./genreForm"

export function HeadRow({colNames}){
    return (
        <>
            <tr >
                {colNames.map((col, index)=><th key={index} >{col}</th>)}
                {/* <th>Actions</th> */}
            </tr>
        </>
    )
}

export function BodyRow({rowObj}){
    let colData = Object.keys(rowObj)
    console.log("rowObj", rowObj)

    // const actions = [
    //     new actionDetails('Suspend', suspendUser, 'bg-blue-500', 'text-white'),
    //     new actionDetails('Delete', deleteUser, 'bg-rose-500', 'text-white')
    // ]
    return (
        <>    
            <tr className="z-1">     
                {colData.map((objProp, index)=><td key={index} >{rowObj[objProp]}</td>)}
                {/* <td className='z-1'><RowAction rowID={rowID} positioning='absolute' actions={actions}>Action</RowAction></td> */}
                        
            </tr>        
        </>
    )
}	