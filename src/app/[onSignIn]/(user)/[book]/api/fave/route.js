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
    const [rows, fields] = await conn.execute("INSERT INTO favorites(userID, bookID) VALUES (?, ?)", [userID, bookID])
    const [result, resFields] = await conn.execute("SELECT f.favoriteID FROM favorites f WHERE f.userID=? AND f.bookID=?", [userID, bookID])
    await poolPromise.releaseConnection(conn)

    return Response.json(result)
}