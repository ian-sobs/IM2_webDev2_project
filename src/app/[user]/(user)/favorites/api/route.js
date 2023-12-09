import pool from "@/dbConn";
import {auth} from '@/components/authentication/authUser'

export async function GET(request) {
    // const cookieStore = cookies()
    // const userCookie = cookieStore.get('userCredentials')
    let usrInfo = auth()

    // const userInfo = JSON.parse(decoded)
    // console.log("route handler for favorites", userCookie)

    // console.log("route handler of market pool config:", pool.config.connectionConfig)

    const promisePool = pool.promise()
    const conn = await promisePool.getConnection()

    const [results, fields] = await conn.execute('SELECT book.bookID, book.title, book.author, book.description AS `desc`, book.img, book.priceUSD, book.avgRating FROM ((book INNER JOIN favorites ON book.bookID = favorites.bookID) INNER JOIN `user` ON `user`.userID = favorites.userID) WHERE `user`.userID = ?;', [usrInfo.usr])
    
    promisePool.releaseConnection(conn)
    console.log("Results of favorites api", Response.json(results))
    // console.log(`favorite books of user with ID ${userInfo.userID}`,results)
    return Response.json(results)
}