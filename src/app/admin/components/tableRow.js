
export function HeadRow({colNames}){
    return (
        <>
            <tr >
                {colNames.map((col)=><th>{col}</th>)}
            </tr>
        </>
    )
}

export function BodyRow({rowObj, ndxToShorten}){
    let colData = Object.keys(rowObj)
    return (
        <>    
            <tr>     
                {colData.map((objProp, index)=>{
                    if(index == ndxToShorten){ return <td className='w-[10px] text-cyan-700 '><a target="_blank" className='hover:text-cyan-400' href={`${rowObj[objProp]}`}>{rowObj[objProp]}</a></td>}
                    else{
                        return <td >{rowObj[objProp]}</td>
                    }    
                })}
                        
            </tr>        
        </>
    )
}	