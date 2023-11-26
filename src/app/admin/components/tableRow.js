export function HeadRow({ColNames}){
    return (
        <>
            <tr>
                {ColNames.map((col)=><th>{col}</th>)}
            </tr>
        </>
    )
}

export function BodyRow({rowObj}){
    let colData = Object.keys(rowObj)
    return (
        <>
            <tr>
                {colData.map((objProp)=><td>{rowObj[objProp]}</td>)}
            </tr>
        </>
    )
}