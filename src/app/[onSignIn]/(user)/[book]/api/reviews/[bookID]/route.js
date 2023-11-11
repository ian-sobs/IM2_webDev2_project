import pool from '@/dbConn'

export async function GET(request, { params }) {
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    conn.execute()

}