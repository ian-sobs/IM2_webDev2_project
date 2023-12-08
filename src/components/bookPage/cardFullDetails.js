//the full details of the book along with the reviews by the users (the reviews by the users might not part of this component to experiment with templates)
import GenInfo from './genInfo'
import Reviews from './reviewSection'
import getUsrCookie from '../getUsrCookie'
import {auth} from '@/components/authentication/authUser'

export default function bookPage({genInfoRH, reviewsRH, searchParams}){
    const userInfo = auth()
    return(
        <>
            <div className="flex flex-wrap flex-col items-center w-full max-w-screen-lg">
                <GenInfo userInfo={userInfo} searchParams={searchParams} routeHand={genInfoRH}></GenInfo>
                <div className="h-[15px]"></div>
                <Reviews userInfo={userInfo} searchParams={searchParams} routeHand={reviewsRH}></Reviews>
                
            </div>

        </>
    )
}