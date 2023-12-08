import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    
    // if(!request.cookies.has('userCredentials')){ 
    //     console.log("NO COOKIES")
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
    console.log("Middleware triggered")
    // let cookie = request.cookies.get('userCredentials')
    // let parsedCookieVal = JSON.parse(cookie.value)
    // console.log("parsedCookieVal_middleware", parsedCookieVal)
    // return NextResponse.redirect(new URL(`/${parsedCookieVal.username}/`, request.url))
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