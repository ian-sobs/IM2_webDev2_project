import dbConn from "@/dbConn";

export async function GET(request) {
    const promisePool = dbConn.promise()
    const conn = await promisePool.getConnection()
    const [results, fields] = await conn.execute('SELECT * FROM `book`')
    promisePool.releaseConnection()
    // console.log("jdalfja", Response.json(results))
    return Response.json(results)
}