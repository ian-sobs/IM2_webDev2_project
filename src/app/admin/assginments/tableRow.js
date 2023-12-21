'use client'
import RowAction from "@/app/admin/components/rowAction"
import actionDetails from "@/app/admin/components/actionButDetails"
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

// function removeUser(rowID){
//     fetch("/admin/assginments/api/removeUser", {            
//         method: "POST",
//         headers: new Headers({'content-type': 'application/json'}),
//         body: JSON.stringify({usrID: rowID})
//     })
//     .then((result)=>result.json())
//     .then((output)=>{
//         if(output.removedProperly){

//         }
//     })
// }


export function BodyRow({removeUser, rowObj}){
    let colData = Object.keys(rowObj)
    console.log("rowObj", rowObj)

    const actions = [
        new actionDetails('Remove', removeUser, 'bg-blue-500', 'text-white')
    ]
    return (
        <>    
            <tr className="z-1">     
                {colData.map((objProp, index)=><td key={index} >{rowObj[objProp]}</td>)}
                <td key="actions">
                    <RowAction rowID={rowObj["usrID"]} positioning='absolute' actions={actions} >Actions</RowAction>
                </td>
            </tr>        
        </>
    )
}	