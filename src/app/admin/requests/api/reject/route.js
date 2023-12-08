import pool from "@/dbConn"
export async function POST(request) {
    const {rowID} = await request.json()
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    
    
    console.log("reqRoom", reqRoom)

    const [delRes, delResFields] = await conn.execute("DELETE FROM shopping_cart WHERE shoppingCartID=?", [rowID])
    // const [destruct] = delRes
    console.log("delRes", delRes)

    if(destruct.affectedRows <= 0) return Response.json({rejected: false})
    poolPromise.releaseConnection(conn)
    // if(insert.insertID <= 0) return Response.json({approved: false})
    return Response.json({approved: true})
}