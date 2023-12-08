import pool from "@/dbConn"
import getUsrCookie from "@/components/getUsrCookie"
import {auth} from '@/components/authentication/authUser'

export async function GET(request) {
    const userInfo = auth()
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute("SELECT book.bookID, book.title, book.img, shopping_cart.qty, shopping_cart.totalPrice AS `totalPriceUSD`, shopping_cart.dateOrdered, shopping_cart.address FROM (book INNER JOIN shopping_cart ON book.bookID=shopping_cart.bookID) WHERE shopping_cart.userID = ?;", [userInfo.usr])
    poolPromise.releaseConnection(conn)
    return Response.json(rows)
}