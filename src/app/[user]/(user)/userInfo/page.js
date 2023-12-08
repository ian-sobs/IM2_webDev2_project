
import {auth} from '@/components/authentication/authUser'

export default function Page(){
    const userInfo = auth()

    return <h1>Hello</h1>
}