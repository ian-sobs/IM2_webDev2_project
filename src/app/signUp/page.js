
import Form from "@/components/form"
import Link from 'next/link'
import pool from '@/dbConn'

export default async function SignUp() {
  const fields = [
    {
      fieldName: "Sign Up",
      nameAttr: "signUpHeading",
      fieldType: "H1"
    },
    {
      fieldName: "Email",
      nameAttr: "email",
      fieldType: "EMAIL"
    },
    {
      fieldName: "Username",
      nameAttr: "username",
      fieldType: "TEXT"
    },
    {
      fieldName: "Password",
      nameAttr: "password",
      fieldType: "PASSWORD"
    },
    {
      fieldName: "Confirm password",
      nameAttr: "confirmPassword",
      fieldType: "PASSWORD"
    },
    {
      fieldName: "Birth Date",
      nameAttr: "birthDate",
      fieldType: "DATE"
    },
    {
      fieldName: "First name",
      nameAttr: "firstName",
      fieldType: "TEXT"
    },
    {
      fieldName: "Middle name",
      nameAttr: "middleName",
      fieldType: "TEXT"
    },
    {
      fieldName: "Last name",
      nameAttr: "lastName",
      fieldType: "TEXT"
    },
    {
      fieldName: "Sign up",
      nameAttr: "signUp",
      fieldType: "SUBMIT"
    }
  ]
  console.log("signUp pool config", pool.config.connectionConfig)
  let options

  const poolPromise = pool.promise()
  
  const db =  await poolPromise.getConnection()
  
  // const [cntryResults, cntryFields] = await db.execute("SELECT countryID, name FROM country ORDER BY name ASC")
    
  // await poolPromise.releaseConnection(db)
    
  // options = cntryResults.map((cntry, index)=><option key={index} value={cntry.countryID}>{cntry.name}</option>)


  // console.log(cntryResults)
  // const options = cntryResults.map((cntry)=><option value={cntry.countryID}>{cntry.name}</option>)

  async function create(formData) {
    'use server'
    console.log("signUp server action pool config", pool.config.connectionConfig)
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
    if(queriedForObj["COUNT(email)"] >= 1 || queriedForObj["COUNT(username)"] >= 1 || password != formData.get("confirmPassword")){
      poolPromise.releaseConnection(db)
      return
    }
    // if(queriedForObj["COUNT(email)"] < 1 && queriedForObj["COUNT(username)"] < 1 && password == formData.get("confirmPassword")){
    poolPromise.releaseConnection(db)

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
    // }

    poolPromise.releaseConnection(db)
  }

  return ( 

    <>

      <div className="p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#eab308] from-30% via-[#a3e635] via-60% to-[#65a30d] to-90%">
        <Form action={create} fields={fields}></Form> 
        <div className="text-black text-center container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-b-lg">
          Already have an account? <span className="no-underline hover:underline text-[#fc1c6e]"><Link href="/login">Log in</Link></span>
        </div>
      </div>

      
    </>
  )
   
}

