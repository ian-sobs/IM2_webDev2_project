import pool from '@/dbConn'

export async function GET(request, { params }) {
    const bookID = parseInt(params.bookID)
    
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    
    const [rows, fields] = await conn.execute("SELECT * from review r WHERE r.bookID = ?", [bookID])
    console.log(`Reviews for book ${bookID}`, rows)
    await poolPromise.releaseConnection(conn)

}