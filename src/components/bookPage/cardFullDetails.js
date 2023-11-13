//the full details of the book along with the reviews by the users (the reviews by the users might not part of this component to experiment with templates)
import GenInfo from './genInfo'
import Reviews from './reviewSection'

export default function bookPage({genInfoRH, reviewsRH, searchParams}){
    return(
        <>
            <div className="flex flex-wrap flex-col items-center w-full max-w-screen-lg">
                <GenInfo searchParams={searchParams} routeHand={genInfoRH}></GenInfo>
                <div className="h-[15px]"></div>
                <Reviews searchParams={searchParams} routeHand={reviewsRH}></Reviews>
                
            </div>

        </>
    )
}