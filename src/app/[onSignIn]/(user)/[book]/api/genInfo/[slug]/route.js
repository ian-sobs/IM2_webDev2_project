import pool from '@/dbConn'

export async function GET(request, {params}) {
    console.log("request.url", request.url)
    console.log(params)
    console.log("Params.slug", parseInt(params.slug))
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [data, fields] = await conn.execute(`SELECT bk.bookID, bk.title, bk.description, bk.img, bk.priceUSD, bk.avgRating, bk.author, GROUP_CONCAT(gnr.name ORDER BY bk.bookID SEPARATOR ', ') AS genreName  FROM ((book bk INNER JOIN book_genre_relation bgr ON bk.bookID = bgr.bookID) INNER JOIN genre gnr ON gnr.genreID=bgr.genreID ) WHERE bk.bookID=? GROUP BY bk.bookID;`, [params.slug])
    const [results] = data
    await poolPromise.releaseConnection(conn)
    // console.log("Results of genInfo api", Response.json(results))
    // console.log(`favorite books of user with ID ${userInfo.userID}`,results)
    return Response.json(results)
}
//not needed