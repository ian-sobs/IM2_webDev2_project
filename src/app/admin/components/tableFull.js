import {HeadRow, BodyRow} from './tableRow'


export default function TableFull({colNames, rowsData}){
    return(
        <>
        <div className='w-full overflow-x-auto shadow-lg'>
        <table className="table-fixed text-black bg-white border-separate border-spacing-y-[50px] border-spacing-x-9 ">
            <thead>
                <HeadRow colNames={colNames} ndxToShorten={4}></HeadRow>
            </thead>
            <tbody>
                {rowsData.map((rowObj, index)=><BodyRow key={index} rowObj={rowObj} ndxLink={4}></BodyRow>)}
            </tbody>
        </table>        
        </div>

        
        </>

    )

}