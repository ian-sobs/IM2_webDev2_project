import pool from "@/dbConn";

export async function GET(request) {
    console.log("route handler of market pool config:", pool.config.connectionConfig)
    const promisePool = pool.promise()
    const conn = await promisePool.getConnection()
    const [results, fields] = await conn.execute('SELECT * FROM `book`')
    await promisePool.releaseConnection(conn)
    // console.log("jdalfja", Response.json(results))
    return Response.json(results)
}