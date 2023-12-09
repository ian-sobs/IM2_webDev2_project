import pool from '@/dbConn'
import VldtMssg from '@/components/validMssg'

export async function POST(request) {
    const {genreName, genreID, slots} = await request.json()
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [result, fields] = await conn.execute('UPDATE genre SET name=?, slots=? WHERE genreID=?', [genreName, slots, genreID])

    let ret = {
        sqlHeader: result
    }

    const [genre, genreFields] = await conn.execute('SELECT genreID AS "ID", name AS "Name", slots AS "Max occupancy" FROM genre WHERE genreID=?', [genreID])
    const [newlyInserted] = genre
    ret.toDisplay = newlyInserted
    poolPromise.releaseConnection(conn)
    console.log('retret', ret)

    
    return Response.json(ret)
}