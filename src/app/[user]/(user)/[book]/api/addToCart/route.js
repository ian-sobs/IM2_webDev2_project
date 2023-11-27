import pool from "@/dbConn"

export async function POST(request) {
    const res = await request.json()
    console.log("Shopping Cart form data", res)
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [rows, fields] = await conn.execute(
      "INSERT INTO shopping_cart(userID, bookID, qty, totalPrice, address) VALUES (?, ?, ?, ?, ?)", 
      [parseInt(res.userID), parseInt(res.bookID), parseInt(res.prodQuant), parseFloat(res.totalPrice).toFixed(2), res.address]
    )
    console.log("shopping cart rows", rows)
    poolPromise.releaseConnection(conn)

    if(rows.insertId == null) return ({insertId: null})
   
    return Response.json(rows)
}