//the full details of the book along with the reviews by the users (the reviews by the users might not part of this component to experiment with templates)
import GenInfo from './genInfo'
import Reviews from './reviews'

export default function bookPage({genInfoRH, reviewsRH, searchParams}){
    return(
        <>
            <div className="flex flex-wrap flex-col items-center w-full max-w-screen-lg">
                <GenInfo searchParams={searchParams} routeHand={genInfoRH}></GenInfo>
                <Reviews searchParams={searchParams} routeHand={reviewsRH}></Reviews>
            </div>

        </>
    )
}