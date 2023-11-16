import pool from '@/dbConn'
import getUsrCookie from '@/components/getUsrCookie'

export async function POST(request) {
    const searchParams = request.nextUrl.searchParams
    const bookID = parseInt(searchParams.get('bookID'))
    // const userInfo = getUsrCookie()
    const formData = await request.formData()
    const review = formData.get('review')
    console.log("postReview", review)
    console.log("postBookID", bookID)
    // const formData = await request.body
    // console.log(formData)
    // const review = formData.get('review')
    // console.log(review)

    return Response.json({bookID})

}