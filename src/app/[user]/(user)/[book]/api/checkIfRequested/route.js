import pool from "@/dbConn"


export async function GET(request) {

    const data = await res.json()
   
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    // query is "hello" for /api/search?query=hello
    return Response.json({ data })
  }