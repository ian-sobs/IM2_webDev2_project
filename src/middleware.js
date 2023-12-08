import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // const jwt = require('jsonwebtoken')

    // if(!cookies().has('usrToken')) redirect('/login')

    // const usrToken = cookies().get('usrToken')
    // console.log("usrTokenInMidware", usrToken)

    // try {
    //     var decoded = jwt.verify(usrToken.value, process.env.JWT_SECRET);
    // } catch(err) {
    //     console.log("jwtErr", err)
    //     redirect('/login')
    // }

    // console.log("AUTHENTICATED", decoded)

}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/user/:path*',
        '/admin/:path*'
      ],
}