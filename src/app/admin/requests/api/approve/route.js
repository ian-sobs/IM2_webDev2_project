import pool from "@/dbConn"
export async function POST(request) {
    const {rowID} = await request.json()
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    console.log("rowID", rowID)
    const [result, fields] = await conn.execute("SELECT userID, bookID FROM shopping_cart WHERE shoppingCartID=?", [rowID])
    const [reqRoom] = result
    console.log("reqRoom", result)

    const [delRes, delResFields] = await conn.execute("DELETE FROM shopping_cart WHERE shoppingCartID=?", [rowID])
    // const [destruct] = delRes
    console.log("delRes", delRes)

    if(delRes.affectedRows <= 0) return Response.json({approved: false})

    const [insert, insertFields] = await conn.execute("INSERT INTO `order` (userID, bookID) VALUES (?, ?)", [reqRoom.userID, reqRoom.bookID])
    console.log("insert", insert)


    // if(insert.insertID <= 0) return Response.json({approved: false})
    return Response.json({approved: true})
}