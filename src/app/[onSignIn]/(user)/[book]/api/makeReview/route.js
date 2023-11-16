import pool from '@/dbConn'
import getUsrCookie from '@/components/getUsrCookie'

export async function POST(request) {
    const userInfo = getUsrCookie()
    const searchParams = request.nextUrl.searchParams
    const bookID = parseInt(searchParams.get('bookID'))
    const formData = await request.formData()
    const review = formData.get('review')
    // console.log("postReview", review)
    // console.log("postBookID", bookID)


    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [row, fields] = await conn.execute("INSERT INTO review(`userID`, `bookID`, `content`) VALUES (?, ?, ?)", [userInfo.userID, bookID, review])
    const [result, slctFields] = await conn.execute("SELECT usr.email, usr.username, r.content, r.datePosted FROM (`user` usr INNER JOIN review r ON usr.userID = r.userID) WHERE r.reviewID = ?", [row.insertId])
    const [recentReview] = result
    await poolPromise.releaseConnection(conn)
    // console.log(result)

    return Response.json(recentReview)

}