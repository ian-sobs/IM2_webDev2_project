'use server'
import pool from '@/dbConn'
import { redirect } from 'next/navigation'

export async function submitLogin(formData) {
        
    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const poolPromise = pool.promise()
    const db =  await poolPromise.getConnection()

    formData.delete("logIn")
    console.log(formData)

    const password = formData.get("password")

    const [rows, fields] = await db.execute('SELECT email, password_bcrypt FROM user WHERE email = ?', [formData.get("email")])
    const [queryObj] = rows
    console.log("queryObj", queryObj)

    if(rows.length <= 0){
        return
    }
    
   
    console.log("User exists!")
    console.log(queryObj["password_bcrypt"])

    const result = await bcrypt.compare(password, queryObj["password_bcrypt"])

    if(!result){
        return
    } 
    
    poolPromise.releaseConnection(db)
    redirect('/market')
  }