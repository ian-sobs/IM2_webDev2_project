import pool from "@/dbConn";
import { cookies } from 'next/headers'

export async function GET(request) {
    const cookieStore = cookies()
    const userCookie = cookieStore.get('userCredentials')

    const userInfo = JSON.parse(userCookie.value)
    // console.log("route handler for favorites", userCookie)

    // console.log("route handler of market pool config:", pool.config.connectionConfig)

    const promisePool = pool.promise()
    const conn = await promisePool.getConnection()

    const [results, fields] = await conn.execute('SELECT book.title, book.author, book.description AS `desc`, book.img, book.priceUSD, book.avgRating FROM ((book INNER JOIN favorites ON book.bookID = favorites.favoriteID) INNER JOIN `user` ON `user`.userID ) WHERE `user`.userID = ?;', [userInfo.userID])
    
    await promisePool.releaseConnection(conn)
    console.log("Results of favorites api", Response.json(results))
    // console.log(`favorite books of user with ID ${userInfo.userID}`,results)
    return Response.json(results)
}