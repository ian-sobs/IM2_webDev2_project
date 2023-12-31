import pool from '@/dbConn'
export async function POST(request) {
    // console.log("signUp server action pool config", pool.config.connectionConfig)
    const res = await request.formData()

    let ret ={
        email: "Looks good!",
        username: "Looks good!",
        password: "Looks good!"
    }

    let isValid = true

    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const poolPromise = pool.promise()
    const db =  await poolPromise.getConnection()

    formData.delete("signUp")
    const email = formData.get("email")
    const username = formData.get("username")
    const password = formData.get("password")
    const birthDate = formData.get("birthDate")
    const firstName = formData.get("firstName")
    const middleName = formData.get("middleName")
    const lastName = formData.get("lastName")
    // const address = formData.get("address")
    // const country = formData.get("country")
    
    const [rows, fields] = await db.execute('SELECT COUNT(email), COUNT(username) FROM user WHERE email = ? AND username = ?', [email, username])
    
    const [queriedForObj] = rows
    // console.log("formdata", formData)

    //modify the code to allow redirects and check if the input fields are empty
    if(queriedForObj["COUNT(email)"] >= 1){
        ret.email = "Email is taken"
        isValid = false
    }
    if(queriedForObj["COUNT(username)"] >= 1){
        ret.username = "Username is taken"
        isValid = false
    }
    if(password != formData.get("confirmPassword")){
        ret.password = "Passwords do not match"
        isValid = false
    }
    // if(queriedForObj["COUNT(email)"] < 1 && queriedForObj["COUNT(username)"] < 1 && password == formData.get("confirmPassword")){
    poolPromise.releaseConnection(db)

    if(isValid){
        bcrypt.hash(password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            pool.getConnection(function(err, conn){
                conn.execute(
                'INSERT INTO user (email, username, password_bcrypt,  birthdate, firstName, midName, lastName) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [email, username, hash, birthDate, firstName, middleName, lastName],
                    function(err, results, fields) {
                        console.log(results); // results contains rows returned by server
                        console.log(fields); // fields contains extra meta data about results, if available
                        pool.releaseConnection(conn)
                        
                        // If you execute same statement again, it will be picked from a LRU cache
                        // which will save query preparation time and give better performance
                    }
                );
            })
        })
        
    }
    return Response.json(ret)

}