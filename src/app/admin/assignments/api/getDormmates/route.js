import pool from '@/dbConn'
export async function GET(request) {
   const searchParams = request.nextUrl.searchParams
   const rowID = searchParams.get('rowID')

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [result, fields] = await conn.execute('SELECT `user`.userID AS usrID, user.email AS Email, user.firstName AS `First name`, user.lastName AS `Last name` FROM ((`user` INNER JOIN `order` ON `order`.userID = `user`.userID) INNER JOIN book ON `order`.bookID=book.bookID) WHERE `order`.bookID=?',[rowID])
    console.log(result)
    poolPromise.releaseConnection(conn)
   
    return Response.json(result)
  }