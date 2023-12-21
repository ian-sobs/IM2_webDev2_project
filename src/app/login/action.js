'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import pool from '@/dbConn'

export async function submitLogin(currState, formData) {
    const jwt = require('jsonwebtoken')
    


    // console.log("login pool config: action.js", pool.config.connectionConfig)   
    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const poolPromise = pool.promise()
    const db =  await poolPromise.getConnection()

    formData.delete("logIn")
    console.log(formData)

    let ret = {
        email: "",
        password: "",
        isValid: true
    }

    const password = formData.get("password")
    const email = formData.get("email")

    if(email.length == 0){
        ret.email = "Email must not be empty"
        ret.isValid = false
    }

    if(password.length == 0){
        ret.password = "Password must not be empty"
        ret.isValid = false
    }

    if(!ret.isValid){ 
        poolPromise.releaseConnection(db)
        return ret
    }

    const [rows, fields] = await db.execute("SELECT `user`.`userID` AS usr, `user`.`email` AS email, `user`.`username` AS unm, `user`.`firstName` AS given_name, `user`.`midName` AS middle_name, `user`.`lastName` AS family_name, `user`.`password_bcrypt` AS `password`, `user`.`birthdate` FROM `user` WHERE `email`= ?", [email])
    const [queryObj] = rows

    if(rows.length <= 0){
        ret.email = "User does not exist"
        ret.isValid = false
        poolPromise.releaseConnection(db)
        
    }

    if(!ret.isValid) return ret

    const result = await bcrypt.compare(password, queryObj["password"])

    if(!result){
        ret.password = "Wrong password"
        ret.isValid = false
        poolPromise.releaseConnection(db)
        return ret
    } 

    let jwt_payload = {
        usr: queryObj['usr'],
        email: queryObj['email'],
        unm: queryObj['unm'],
        given_name: queryObj['given_name'],
        middle_name: queryObj['middle_name'],
        family_name: queryObj['family_name'],
        birthdate: queryObj['birthdate']
    }

    console.log("Password was correct") 

    //creates the JWT token and stores it as an HTTP cookie
    console.log("process.env.NEXT_PUBLIC_JWT_SECRET", process.env.JWT_SECRET)
    let token = jwt.sign(jwt_payload, process.env.JWT_SECRET, {expiresIn: 86400})
    const userToken = cookies()
    userToken.set("usrToken", token, {httpOnly: true, secure: true, sameSite: 'None' })

    console.log("jwt_payload", jwt_payload)
    console.log("rows", rows)
    console.log("loginAction queryObj", queryObj)


    // userToken.set('userToken', JSON.stringify(queryObj))

    console.log("userToken", userToken)

    if(queryObj["email"] === "admin@bookii.com"){
        redirect(`/admin/books`)
    }

    poolPromise.releaseConnection(db)
    redirect(`/${queryObj['unm']}/market`)
  }