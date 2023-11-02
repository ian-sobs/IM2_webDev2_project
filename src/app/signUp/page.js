// "use client";
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
import Form from "../(components)/form"
import Link from 'next/link'

export default function SignUp() {
  async function create(formData) {
    // 'use server'
 
    // mutate data
    // revalidate cache
  }

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
  return ( 

    <>

      <div className="p-4 min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#DC8ECB] from-30% via-[#FFB169] via-60% to-[#FFF8BD] to-90%">
        <Form fields={fields} ></Form> 
        <div className="text-black text-center container p-[10px] h-fit w-11/12 sm:w-[390px] md:w-[510px] lg:w-[410px] xl:w-[600px] bg-gray-50 rounded-b-lg">
          Already have an account? <span className="no-underline hover:underline text-[#fc1c6e]"><Link href="/login">Log in</Link></span>
        </div>
      </div>

      
    </>
  )
   
}

