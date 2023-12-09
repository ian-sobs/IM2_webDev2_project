import pool from '@/dbConn'
export async function GET(request) {
   const searchParams = request.nextUrl.searchParams
   const rowID = searchParams.get('rowID')

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [result, fields] = await conn.execute('SELECT title FROM book WHERE bookID=?',[rowID])
    const [roomName] = result
    console.log(result)
   
    return Response.json(roomName)
  }