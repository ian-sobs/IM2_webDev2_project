import adminPageStyle from '../adminPageStyle'
import pool from '@/dbConn'
import TableFull from '../components/genres/tableFull'


export default async function books(){
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute('SELECT genreID AS "ID", name AS "Name" FROM genre')
    

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
                
                    
                    <TableFull caption='Table of all books in the database' colNames={colNames} rowsData={rows}></TableFull>        
                    {/* {(cookies().has("userCredentials")) ? <CardsDisplay currency={userInfo["crrncyCode"]} localCurrPerUSD={userInfo["localCurrPerUSD"]} CtabStyles="col-span-2 md:col-span-3 lg:col-span-4 " requestURL="/user/market/api" username={userInfo["username"]}></CardsDisplay> : <h1>error</h1>} */}
    
                </section>
            </>
        )
    }
    return(
        <>
            
            <section name="sectionGrid" className={`flex flex-row justify-center items-center ${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                    <div className='text-slate-300 text-4xl '>

                    <h1 >No genres to show</h1>
                    </div>
            </section>
        </>
    )

}