import pool from "@/dbConn"

export async function POST(request) {
    let removedProperly = false 

    const res = await request.json()
    console.log("src/app/admin/assginments/api/removeUser res", res)
    const usrID = res.usrID
    const poolPromise = pool.promise()
    const conn = await poolPromise.getConnection()

    const [rows1, fields1] = await conn.execute("SELECT `bookID` FROM `order` WHERE `order`.userID=?", [usrID])
    const [book] = rows1

    const [rows, fields] = await conn.execute("DELETE FROM `order` WHERE `order`.userID=?", [usrID])
    console.log("src/app/admin/assginments/api/removeUser/route.js/ delete: ", rows)

    const [rows2, fields2] = await conn.execute("UPDATE `book` SET `slots` = `slots` + 1 WHERE `book`.bookID = ?", [book.bookID])
    console.log("src/app/admin/assginments/api/removeUser/route.js/ update: ", rows2)

    poolPromise.releaseConnection(conn)

    if(rows.affectedRows == 1 && rows2.affectedRows == 1){
        removedProperly = true
    }
    
   
    return Response.json({removedProperly: removedProperly})
  }