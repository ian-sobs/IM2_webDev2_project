import pool from "@/dbConn"
import getUsrCookie from "@/components/getUsrCookie"

export async function GET(request) {
    const userInfo = getUsrCookie()
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute("SELECT book.bookID, book.title, book.img, shopping_cart.qty, shopping_cart.totalPrice AS `totalPriceUSD`, shopping_cart.dateOrdered  FROM (book INNER JOIN shopping_cart ON book.bookID=shopping_cart.bookID) WHERE shopping_cart.userID = ?;", [userInfo.userID])
    poolPromise.releaseConnection(conn)
    return Response.json(rows)
}