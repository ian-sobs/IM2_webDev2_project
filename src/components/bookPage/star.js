'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function StarRating({rating}){
    const [starRating, setStarRating] = useState(rating)
    const [count, setCount] = useState(0)
 
    useEffect(()=>{
        if((starRating - Math.floor(starRating)) >= 0.5){
            setCount(Math.ceil(starRating))
        }
        else{
            setCount(Math.floor(starRating))
        }
    } , [starRating])
    
    const uncolored = {
        color: 'gray',
        fontSize: '20px'
    }

    const colored ={
        color: 'orange',
        fontSize: '20px'        
    }
    let starArr = []
    let y = 0
    for(let x = 0; x < count; ++x){
        starArr.push(<FontAwesomeIcon key={y++} icon={faStar} style={colored} />)
    }
    for(let x = 0; x < 5 - count; ++x){
        starArr.push(<FontAwesomeIcon key={y++} icon={faStar} style={uncolored} />)
    }

    return (
        <>
            <div className="flex">
                {/* <FontAwesomeIcon icon={faStar} style={uncolored} />
                <FontAwesomeIcon icon={faStar} style={uncolored} />
                <FontAwesomeIcon icon={faStar} style={uncolored} />
                <FontAwesomeIcon icon={faStar} style={uncolored} />
                <FontAwesomeIcon icon={faStar} style={uncolored} /> */}
                {starArr}
            </div>
        </>
    )
}