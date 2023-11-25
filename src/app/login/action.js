'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import pool from '@/dbConn'

export async function submitLogin(formData) {
    console.log("login pool config: action.js", pool.config.connectionConfig)   
    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const poolPromise = pool.promise()
    const db =  await poolPromise.getConnection()

    formData.delete("logIn")
    // console.log(formData)

    const password = formData.get("password")

    const [rows, fields] = await db.execute("SELECT `user`.`userID`, `user`.`email`, `user`.`username` , `user`.`firstName` , `user`.`midName`, `user`.`lastName`, `user`.`password_bcrypt` AS `password`, `user`.`address` , `user`.`birthdate` , `country`.`name` AS `country`,    `country`.`abbreviation` AS `country_a2`,`country`.`crrncyCode` , `country`.`localCurrPerUSD`  FROM (`user` INNER JOIN `country` ON `country`.countryID = `user`.countryID) WHERE `email`= ?;", [formData.get("email")])
    const [queryObj] = rows

    console.log("rows", rows)
    console.log("queryObj", queryObj)

    if(rows.length <= 0){
        await poolPromise.releaseConnection(db)
        return
    }
    
   
    // console.log("User exists!")
    // console.log(queryObj["password_bcrypt"])

    const result = await bcrypt.compare(password, queryObj["password"])

    if(!result){
        await poolPromise.releaseConnection(db)
        return
    } 
    console.log("Password was correct") 

    const userCredentials = cookies()
    userCredentials.set({
        name: "userCredentials",
        value: JSON.stringify(queryObj),
        httpOnly: true
    })
    // userCredentials.set('userCredentials', JSON.stringify(queryObj))

    console.log("userCredentials", userCredentials)

    poolPromise.releaseConnection(db)
    redirect(`/${queryObj['username']}/market`)
  }