
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
                    if(index == ndxToShorten){ return <td className='w-[10px]'>{rowObj[objProp]}</td>}
                    else{
                        return <td >{rowObj[objProp]}</td>
                    }    
                })}
                        
            </tr>        
        </>
    )
}	