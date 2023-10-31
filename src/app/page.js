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
      fieldType: "TEXT"
    },
    {
      fieldName: "Username",
      fieldType: "TEXT"
    },
    {
      fieldName: "Password",
      fieldType: "TEXT"
    },
    {
      fieldName: "Confirm password",
      fieldType: "TEXT"
    },
    {
      fieldName: "First name",
      fieldType: "TEXT"
    },
    {
      fieldName: "Middle name",
      fieldType: "TEXT"
    },
    {
      fieldName: "Last name",
      fieldType: "TEXT"
    },
    {
      fieldName: "Country",
      fieldType: "SELECT"
    },
    {
      fieldName: "Address",
      fieldType: "TEXT"
    }
  ]
  return ( 

    <>
      {<Form fields={fields}></Form>}
    </>
  )
   
}

