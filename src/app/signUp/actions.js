'use server'
import pool from '@/dbConn'
export async function create(currState , formData) {

    // console.log("signUp server action pool config", pool.config.connectionConfig)

    let ret ={
      email: "Email looks good!",
      username: "Username looks good!",
      password: "Password looks good!",
      confirmPassword: "Is a match with the inputted password!",
      isValid: true
  }

    // let ret.isValid = true

    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const poolPromise = pool.promise()
    const db =  await poolPromise.getConnection()

    // formData.delete("signUp")
    const email = formData.get("email")
    const username = formData.get("username")
    const password = formData.get("password")
    const birthDate = formData.get("birthDate")
    const firstName = formData.get("firstName")
    const middleName = formData.get("middleName")
    const lastName = formData.get("lastName")
    // const address = formData.get("address")
    // const country = formData.get("country")
    
    const [rows, fields] = await db.execute('SELECT COUNT(email) FROM user WHERE email = ?', [email])
    const [userEmail] = rows

    const [newRows, newFields] = await db.execute('SELECT COUNT(username) FROM user WHERE username = ?', [username])
    const [userName] = newRows
    
    const [queriedForObj] = rows
    // console.log("formdata", formData)

    //modify the code to allow redirects and check if the input fields are empty
      //modify the code to allow redirects and check if the input fields are empty
    if(email.length == 0){
        ret.email = "Email must not be empty"
        ret.isValid = false
    }
    if(username.length == 0){
        ret.username = "Username must not be empty"
        ret.isValid = false
    }


    if(userEmail["COUNT(email)"] >= 1){
        ret.email = "Email is taken"
        ret.isValid = false
    }
    if(userName["COUNT(username)"] >= 1){
        ret.username = "Username is taken"
        ret.isValid = false
    }
    if(password != formData.get("confirmPassword")){
        ret.confirmPassword = "Passwords do not match"
        ret.isValid = false
    }

    if(password.length == 0){
        ret.password = "Password must not be empty"
        ret.isValid = false
    }
    // if(queriedForObj["COUNT(email)"] < 1 && queriedForObj["COUNT(username)"] < 1 && password == formData.get("confirmPassword")){
    poolPromise.releaseConnection(db)

    if(ret.isValid){
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
    return ret

  }
