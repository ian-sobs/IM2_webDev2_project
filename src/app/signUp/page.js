
import Form from "@/(components)/form"
import Link from 'next/link'
import pool from '@/dbConn'

export default function SignUp() {


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
      fieldName: "Country",
      nameAttr: "country",
      fieldType: "SELECT"
    },
    {
      fieldName: "Address",
      nameAttr: "address",
      fieldType: "TEXT"
    },
    {
      fieldName: "Sign up",
      nameAttr: "signUp",
      fieldType: "SUBMIT"
    }
  ]

  async function create(formData) {
    'use server'

    const poolPromise = pool.promise()
    const db =  await poolPromise.getConnection()
    console.log(test)
    
    const results = await db.execute('select * from country where countryID = ?', [1])
    console.log(results)
    console.log(formData)

  }
  
  return ( 

    <>

      <div className="p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#DC8ECB] from-30% via-[#FFB169] via-60% to-[#FFF8BD] to-90%">
        <Form  action={create} fields={fields} ></Form> 
        <div className="text-black text-center container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-b-lg">
          Already have an account? <span className="no-underline hover:underline text-[#fc1c6e]"><Link href="/login">Log in</Link></span>
        </div>
      </div>

      
    </>
  )
   
}

