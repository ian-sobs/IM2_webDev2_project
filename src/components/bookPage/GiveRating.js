'use client'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

export default function StarRating({bookID, userID, starRating}){
    const isInitialRender = useRef(true);
    const [starCount, setStarCount] = useState(starRating)

    let star1 = useRef(null)
    let star2 = useRef(null)
    let star3 = useRef(null)
    let star4 = useRef(null)
    let star5 = useRef(null)

    console.log("Star rating", starRating)

    const uncolored = {
        fontSize: '30px'
    }

    let starArrJsx = [                
        <FontAwesomeIcon key={0} ref={star1} className='text-gray-400 hover:cursor-pointer' onMouseEnter={()=>starNdx(0)} icon={faStar} style={uncolored} />, //onMouseLeave={()=>removeStar(starCount)}
        <FontAwesomeIcon key={1} ref={star2} className='text-gray-400 hover:cursor-pointer' onMouseEnter={()=>starNdx(1)} icon={faStar} style={uncolored} />,
        <FontAwesomeIcon key={2} ref={star3} className='text-gray-400 hover:cursor-pointer' onMouseEnter={()=>starNdx(2)} icon={faStar} style={uncolored} />,
        <FontAwesomeIcon key={3} ref={star4} className='text-gray-400 hover:cursor-pointer' onMouseEnter={()=>starNdx(3)} icon={faStar} style={uncolored} />,
        <FontAwesomeIcon key={4} ref={star5} className='text-gray-400 hover:cursor-pointer' onMouseEnter={()=>starNdx(4)} icon={faStar} style={uncolored} />
    ]
   
    let starArr = [star1, star2, star3, star4, star5]


    useEffect(()=>{
        starRate(starRating)
        // removeStar()
    }, [])
   
    const colored ={
        color: 'orange',
        fontSize: '30px'    
    }

    function starRate(star) {
        // setStarCount(star)
        for (let i = 0; i < star; i++) {
            starArr[i].current.style.color = 'orange'
        }
        
    }

    function starNdx(ndx){
        for (let i = 0; i <= 4; i++) {
            if(i <= ndx) starArr[i].current.style.color = 'orange'
            else starArr[i].current.style.color = '#9CA3AF'
        }
    }
      
      function removeStar() {

        for (let i = 0; i < 5; i++) {
            if(starArr[i].current){ 
                starArr[i].current.style.color = '#9CA3AF'
            }
        }
      }

      function handleRate(){

      } 

    return (
        <>
            <div className="flex" onMouseLeave={()=>{
                removeStar()
                starRate(starRating)
                }}>
            {starArrJsx}
            </div>
        </>
    )
}