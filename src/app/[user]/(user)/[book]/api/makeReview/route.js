import pool from '@/dbConn'
import {auth} from '@/components/authentication/authUser'

export async function POST(request) {
    const userInfo = auth()
    const searchParams = request.nextUrl.searchParams
    const bookID = parseInt(searchParams.get('bookID'))
    const formData = await request.formData()
    const review = formData.get('review')
    // console.log("postReview", review)
    // console.log("postBookID", bookID)
    if(review.trim().length <= 0) return Response.json({})

    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()
    const [row, fields] = await conn.execute("INSERT INTO review(`userID`, `bookID`, `content`) VALUES (?, ?, ?)", [userInfo.usr, bookID, review])
    const [result, slctFields] = await conn.execute("SELECT usr.email, usr.username, r.content, r.datePosted FROM (`user` usr INNER JOIN review r ON usr.userID = r.userID) WHERE r.reviewID = ?", [row.insertId])
    const [recentReview] = result
    poolPromise.releaseConnection(conn)
    // console.log(result)

    return Response.json(recentReview)

}