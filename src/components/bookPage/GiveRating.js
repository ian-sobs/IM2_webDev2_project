'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

export default function StarRating(){
    // const [starRating, setStarRating] = useState(rating)
    // const [count, setCount] = useState(0)
 
    // useEffect(()=>{
    //     if((starRating - Math.floor(starRating)) >= 0.5){
    //         setCount(Math.ceil(starRating))
    //     }
    //     else{
    //         setCount(Math.floor(starRating))
    //     }
    // } , [starRating])

    const star1 = useRef(null)
    const star2 = useRef(null)
    const star3 = useRef(null)
    const star4 = useRef(null)
    const star5 = useRef(null)

    const starArr = [star1, star2, star3, star4, star5]
    
    const uncolored = {
        fontSize: '30px'
    }

    const colored ={
        color: 'orange',
        fontSize: '30px'    
    }

    // for(let x = 0; x < count; ++x){
    //     starArr.push(<FontAwesomeIcon icon={faStar} style={colored} />)
    // }
    // for(let x = 0; x < 5 - count; ++x){
    //     starArr.push(<FontAwesomeIcon icon={faStar} style={uncolored} />)
    // }
    function starRate(star) {
        for (let i = 0; i < star; i++) {
        //   document.getElementsByClassName('star-' + (i + 1))[0].style = "color:orange"
            if(starArr[i].current) starArr[i].current.style.color = 'orange'
        }
    }
      
    //   function removeStar(starIdx) {
    //     if (stars[starIdx - 1].rated) {
    //       return
    //     }
    //     for (let i = 0; i < starIdx; i++) {
    //       document.getElementsByClassName('star-' + (i + 1))[0].style = "color:gray"
    //     }
    //   }
    return (
        <>
            <div class="flex">
                <FontAwesomeIcon className='text-gray-400' icon={faStar} style={uncolored} />
                <FontAwesomeIcon className='text-gray-400' icon={faStar} style={uncolored} />
                <FontAwesomeIcon className='text-gray-400' icon={faStar} style={uncolored} />
                <FontAwesomeIcon className='text-gray-400' icon={faStar} style={uncolored} />
                <FontAwesomeIcon className='text-gray-400' icon={faStar} style={uncolored} />
            </div>
        </>
    )
}