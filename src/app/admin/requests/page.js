import adminPageStyle from '../adminPageStyle'
import TableFull from '../components/orders/tableFull'
import pool from '@/dbConn'

export default async function orders(){
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [result, fields] = await conn.execute('SELECT shop.shoppingCartID AS ID, user.email AS Email, bk.title AS `Dorm Room ID`, shop.message AS Message FROM ((shopping_cart shop INNER JOIN user on user.userID=shop.userID) INNER JOIN book bk on bk.bookID=shop.bookID)')
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

               <TableFull colNames={colNames} rowsData={result} caption="Requests"></TableFull>

            </section>
        </>
    )
}