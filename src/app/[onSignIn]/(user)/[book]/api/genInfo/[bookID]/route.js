import pool from '@/dbConn'

export async function GET(request, { params }) {
    console.log(params)
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    conn.execute('', [params.bookID])

}