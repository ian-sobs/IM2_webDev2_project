import pool from "@/dbConn"


export async function GET(request) {

    // const data = await request.json()
   
    const searchParams = request.nextUrl.searchParams
    const userID = searchParams.get('userID')
    const bookID = searchParams.get('bookID')

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [row, fields] = await conn.execute("SELECT COUNT(shoppingCartID) AS reqCount FROM shopping_cart WHERE userID=? AND bookID=?",[userID, bookID])
    const [ret] = row

    console.log("isRequest?",ret)

    return Response.json(ret)
  }