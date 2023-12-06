import adminPageStyle from '../adminPageStyle'
import TableFull from '../components/tableFull_book'
import pool from '@/dbConn'

export default async function genres(){
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute('SELECT genreID AS "ID", name AS "Name" FROM genre')

    const colNames = Object.keys(rows[0])
    poolPromise.releaseConnection(conn)

    if(rows.length > 0){
        return(
            <>
                <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
                
                    <TableFull caption='Table of all genres in the database' colNames={colNames} rowsData={rows}></TableFull>
                    {/* {books.map((book, index)=><Card key={index} details={book}></Card>)} */}
                        
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
                    {/* <button className='text-black'>Add a new genre</button> */}
            </section>
        </>
    )
}