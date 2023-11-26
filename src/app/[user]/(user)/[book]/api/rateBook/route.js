import pool from '@/dbConn'

export async function GET(request, {params}) {
    const searchParams = request.nextUrl.searchParams
    const bookID = parseInt(searchParams.get('bookID'))
    const userID = parseInt(searchParams.get('userID'))

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [data, fields] = await conn.execute(`SELECT * FROM rating WHERE rating.bookID=? AND rating.userID=?;`, [bookID, userID])
    poolPromise.releaseConnection(conn)

    if(data.length <= 0) return Response.json({})

    const [results] = data
    console.log("Rating data", results)

    poolPromise.releaseConnection(conn)

    return Response.json(results)
    // console.log("Results of genInfo api", Response.json(results))
    // console.log(`favorite books of user with ID ${userInfo.userID}`,results)
    // return Response.json(results)
}
//not needed