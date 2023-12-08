import adminPageStyle from '../adminPageStyle'
import pool from '@/dbConn'
import TableFull from '../components/genres/tableFull'
import GenreForm from '../components/genres/genreForm'
import GenreFormEmpty from '../components/genres/genreForm_empty'


export default async function books(){
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute('SELECT genreID AS "ID", name AS "Name", slots AS "Max occupancy" FROM genre')
    

    let colNames
    if(rows.length > 0){ 
         colNames = Object.keys(rows[0])
    }

    poolPromise.releaseConnection(conn)

    // const adminPageStyle = {
    //     allWidth: "min-h-screen pt-[25px] bg-slate-100 pb-[20px] w-full ",
    //     mobile:" px-9 ",
    //     sm:" sm:px-11 ",
    //     md:" md:px-14 ",
    //     lg:" lg:px-20 ",
    //     xl:" xl:px-22 "
    // }
    if(rows.length > 0){
        return(
            <>
                <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                
                    
                    <TableFull caption='Accommodations' colNames={colNames} rowsData={rows}></TableFull>        
                    {/* {(cookies().has("userCredentials")) ? <CardsDisplay currency={userInfo["crrncyCode"]} localCurrPerUSD={userInfo["localCurrPerUSD"]} CtabStyles="col-span-2 md:col-span-3 lg:col-span-4 " requestURL="/user/market/api" username={userInfo["username"]}></CardsDisplay> : <h1>error</h1>} */}
    
                </section>
            </>
        )
    }
    return(
        <>
            
            <section name="sectionGrid" className={`flex flex-row justify-center items-center ${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                    <div className='text-slate-300 text-4xl '>

                    <h1 >No accommodations to show</h1>
                    </div>
                    <GenreFormEmpty className='text-slate-200 fixed bottom-7 left-14 bg-green-400 p-4 rounded-md font-semibold'>Add a new genre </GenreFormEmpty>
            </section>
        </>
    )

}