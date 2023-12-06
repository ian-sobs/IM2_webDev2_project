import pool from '@/dbConn'
export async function POST(request) {
    const {rowID} = await request.json()
    console.log("deleteGenre", rowID)

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [result, fields] = await conn.execute('DELETE FROM genre WHERE genre.genreID=?',[rowID])
    
    console.log("deleteBook result", result)
    poolPromise.releaseConnection(conn)

    return Response.json(result)
}