import adminPageStyle from '../adminPageStyle'
import TableFull from '../components/orders/tableFull'
import pool from '@/dbConn'

export default async function orders(){
    // const poolPromise = pool.promise()
    // const conn = await poolPromise.getConnection()
    // await conn.execute('SELECT ')
    return(
        <>
            <section name="sectionGrid" className={`${adminPageStyle.allWidth} ${adminPageStyle.mobile} ${adminPageStyle.sm} ${adminPageStyle.md} ${adminPageStyle.lg} ${adminPageStyle.xl}`}>
            
               <TableFull colNames rowsData caption></TableFull>

            </section>
        </>
    )
}