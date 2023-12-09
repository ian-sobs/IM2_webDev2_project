import pool from '@/dbConn'

export async function GET(request, { params }) {
    const bookID = parseInt(params.bookID)
    console.log("params", params)
    console.log("bookID", bookID)
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    
    const [rows, fields] = await conn.execute("SELECT usr.email, usr.username, r.content, r.rating, r.datePosted FROM (review r INNER JOIN `user` usr ON usr.userID = r.userID) WHERE r.bookID = ? ORDER BY r.datePosted DESC", [bookID])
    console.log(`Reviews for book ${bookID}`, rows)
    poolPromise.releaseConnection(conn)

    return Response.json(rows)
}