import pool from '@/dbConn'
export async function POST(request) {
    const {bookID} = await request.json()
    console.log("deleteBook", bookID)

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [result, fields] = await conn.execute('DELETE FROM book WHERE book.bookID=?',[bookID])
    
    console.log("deleteBook result", result)
    poolPromise.releaseConnection(conn)

    return Response.json(result)
}