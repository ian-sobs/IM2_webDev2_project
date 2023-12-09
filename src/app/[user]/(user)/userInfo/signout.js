'use client'
import {auth} from '@/components/authentication/authUser'
import { cookies } from 'next/headers'

export default function signOutButton({signOut}){
    function destroyJWT(){
        cookies().delete('usrToken')
        auth()
    }
    return (
        <>
            <button className='bg-rose-500' onClick={destroyJWT}>Sign out</button>
        </>
    )
}