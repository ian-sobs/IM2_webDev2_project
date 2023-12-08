import pool from "@/dbConn"

export async function GET(request, {params}) {
    const searchParams = request.nextUrl.searchParams
    const userID = parseInt(searchParams.get('userID'))
    const bookID = parseInt(searchParams.get('bookID'))

    console.log("favoritesFirstRender", params)
    console.log(`UserID:`, userID)
    console.log(`BookID:`, bookID)

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [rows, fields] = await conn.execute("SELECT COUNT(f.userID) AS faved FROM favorites f WHERE f.userID=? AND f.bookID=?", [userID, bookID])
    poolPromise.releaseConnection(conn)
    const [result] = rows
    console.log("myFavorites", result)

    return Response.json(result)
}