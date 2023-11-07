// // import NextAuth from 'next-auth';
// // import { authOptions } from '@/auth/auth'

// // const handler = NextAuth(authOptions);
// // export { handler as GET, handler as POST };

// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//         // The name to display on the sign in form (e.g. 'Sign in with...')
//         name: 'Credentials',
//         // The credentials is used to generate a suitable form on the sign in page.
//         // You can specify whatever fields you are expecting to be submitted.
//         // e.g. domain, username, password, 2FA token, etc.
//         // You can pass any HTML attribute to the <input> tag through the object.
//         credentials: {
//           email: { label: "Email", type: "email", placeholder: "example@email.com" },
//           password: { label: "Password", type: "password" }
//         },
        
//         async authorize(credentials, req) {
//           // You need to provide your own logic here that takes the credentials
//           // submitted and returns either a object representing a user or value
//           // that is false/null if the credentials are invalid.
//           // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//           // You can also use the `req` object to obtain additional parameters
//           console.log(credentials)
//           // (i.e., the request IP address)
//           const res = await fetch("/your/endpoint", {
//             method: 'POST',
//             body: JSON.stringify(credentials),
//             headers: { "Content-Type": "application/json" }
//           })
//           const user = await res.json()
//           console.log(user)
//           // If no error and we have user data, return it
//           if (res.ok && user) {
//             return user
//           }
//           // Return null if user data could not be retrieved
//           return null
//         }
//       }),
//     // ...add more providers here
//   ],
//   session: {
//     // Choose how you want to save the user session.
//     // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
//     // If you use an `adapter` however, we default it to `"database"` instead.
//     // You can still force a JWT session by explicitly defining `"jwt"`.
//     // When using `"database"`, the session cookie will only contain a `sessionToken` value,
//     // which is used to look up the session in the database.
//     strategy: "jwt",
  
//     // Seconds - How long until an idle session expires and is no longer valid.
//     maxAge: 30 * 24 * 60 * 60, // 30 days
  
//     // Seconds - Throttle how frequently to write to database to extend a session.
//     // Use it to limit write operations. Set to 0 to always update the database.
//     // Note: This option is ignored if using JSON Web Tokens
//     updateAge: 24 * 60 * 60, // 24 hours
    
//     // The session token is usually either a random UUID or string, however if you
//     // need a more customized session token string, you can define your own generate function.
//     generateSessionToken: () => {
//       return randomUUID?.() ?? randomBytes(32).toString("hex")
//     }
//   },

// //   pages: {
// //     signIn: "/api/auth/sigin",
// //     // signOut: '/auth/signout',
// //     error: '/auth/error', // Error code passed in query string as ?error=
// //     // verifyRequest: '/auth/verify-request', // (used for check email message)
// //     newUser: '/market' // New users will be directed here on first sign in (leave the property out if not of interest)
// //   }
// }

// const handler = NextAuth(authOptions)
// export const GET = handler
// export const POST = handler
// export { handler as GET, handler as POST }
// export async function GET(request) {handler}
// export async function POST(request) {handler}
// export { GET: handler, POST: handler }
// const handler = NextAuth(authOptions);
// export default { GET: handler, POST: handler }; 

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import pool from '@/dbConn'

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "email", placeholder: "example@email.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          console.log(credentials)
          // (i.e., the request IP address)
          const res = await fetch("/your/endpoint/", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()

          // If no error and we have user data, return it
          if (res.ok && user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      }),
    // ...add more providers here

  ],
  
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    },
  },

  pages: {
    signIn: '/login',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }

});

export const GET = handler;
export const POST = handler;