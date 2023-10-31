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
import Form from "./(components)/form"

export default function signUp() {
  const fields = [
    {
      fieldName: "Email",
      nameAttr: "email",
      fieldType: "TEXT"
    },
    {
      fieldName: "Username",
      nameAttr: "username",
      fieldType: "TEXT"
    },
    {
      fieldName: "Password",
      nameAttr: "password",
      fieldType: "TEXT"
    },
    {
      fieldName: "Confirm password",
      nameAttr: "confirmPassword",
      fieldType: "TEXT"
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
      {<Form fields={fields}></Form>}
    </>
  )
   
}

