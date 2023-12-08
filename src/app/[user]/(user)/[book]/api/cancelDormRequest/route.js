import pool from "@/dbConn"

export async function POST(request) {
    // const res = await request.json()
    // console.log("Shopping Cart form data", res)

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const searchParams = request.nextUrl.searchParams
    let userID = searchParams.get('userID')
    let bookID = searchParams.get('bookID')

    const [rows, fields] = await conn.execute("DELETE FROM shopping_cart WHERE userID=? AND bookID=?", [parseInt(userID), parseInt(bookID)])
    // const [ret] = rows
    console.log("rowsInCancelDormsRequest", rows)
    poolPromise.releaseConnection(conn)


    return Response.json(rows)
}