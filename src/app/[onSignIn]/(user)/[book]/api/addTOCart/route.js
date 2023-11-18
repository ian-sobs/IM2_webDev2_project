import pool from "@/dbConn"

export async function POST() {
    const poolPromise = pool.promise()
    const conn = poolPromise.getConnection()

    const [rows, fields] = await conn.execute()
   
    return Response.json({})
  }