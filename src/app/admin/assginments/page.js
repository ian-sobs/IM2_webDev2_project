import adminPageStyle from '../adminPageStyle'
import TableFull from './tableFull'
import pool from '@/dbConn'

export default async function orders(){
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [result, fields] = await conn.execute('SELECT DISTINCT bookID FROM `order`')
    const colNames = [
        "ID",
        "Email",
        "Dorm Room ID",
        "Message"
    ]

    poolPromise.releaseConnection(conn)

    return(
        <>
        
            <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
            <div className="h-28"></div>
                {result.map((row)=><TableFull rowID={row.bookID}></TableFull>)}
               

            </section>
        </>
    )
}