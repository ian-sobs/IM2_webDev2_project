'use client'
import {HeadRow, BodyRow} from './tableRow'
import { useState } from 'react'

export default function TableFull({colNames, rowsData, caption}){
    const [rows, setRows] = useState(rowsData)
    let rowsCopy = [...rows]
    console.log('rowsCopy', rowsCopy)

    function tbodyHandler(newRows){
        setRows(newRows)
    }

    return(
        <>
        <div className='w-full overflow-x-auto shadow-lg z-1'>
        <table className="table-fixed text-black bg-white border-separate border-spacing-y-[50px] border-spacing-x-9 z-1">
            <caption className="caption-top mb-5 text-slate-400">
                {caption}
            </caption>
            <thead>
                <HeadRow colNames={colNames} ndxToShorten={4}></HeadRow>
            </thead>
            <tbody>
                {rows.map((rowObj, index)=><BodyRow rowsCopy={rowsCopy} tbodyHandler={tbodyHandler} key={index} rowObj={rowObj} ndxLink={4}></BodyRow>)}
            </tbody>
        </table>        
        </div>

        
        </>

    )

}