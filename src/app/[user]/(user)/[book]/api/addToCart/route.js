import pool from "@/dbConn"

export async function POST(request) {
    const res = await request.json()
    console.log("Shopping Cart form data", res)
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [rows, fields] = await conn.execute(
      "INSERT INTO shopping_cart(userID, bookID, message) VALUES (?, ?, ?)", 
      [parseInt(res.userID), parseInt(res.bookID), res.message]
    )
    console.log("shopping cart rows", rows)
    poolPromise.releaseConnection(conn)

    if(rows.insertId == null) return ({insertId: null})
   
    return Response.json(rows)
}