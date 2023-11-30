// 'use client'
import RowAction from "./rowAction"

export function HeadRow({colNames, ndxToShorten}){
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

export function BodyRow({rowObj, ndxLink, ndxDesc}){
    let colData = Object.keys(rowObj)
    const actions = [
        {
            name: 'Edit',
            apiLink: 'Edit',
            activeBgColor: 'bg-blue-500',
            activeTextColor: 'text-white'
        },
        {
            name: 'Delete',
            apiLink: 'Delete',
            activeBgColor: 'bg-rose-600',
            activeTextColor: 'text-white'
        }
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
                <td className='z-1'><RowAction actions={actions}>Action</RowAction></td>
                        
            </tr>        
        </>
    )
}	