//the full details of the book along with the reviews by the users (the reviews by the users might not part of this component to experiment with templates)
import GenInfo from './genInfo'
import Reviews from './reviews'

export default function bookPage({genInfoRH, reviewsRH}){
    return(
        <>
            <GenInfo routeHand={genInfoRH}></GenInfo>
            <Reviews routeHand={reviewsRH}></Reviews>
        </>
    )
}