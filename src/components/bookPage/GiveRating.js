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
    const isInitialRender = useRef(true);
    const [starCount, setStarCount] = useState(0)

    let star1 = useRef(null)
    let star2 = useRef(null)
    let star3 = useRef(null)
    let star4 = useRef(null)
    let star5 = useRef(null)
   
    let starArr = [star1, star2, star3, star4, star5]

    useEffect(()=>{
        if (isInitialRender.current) {
            // Update the ref to indicate that subsequent renders are not initial
            isInitialRender.current = false;
            // Skip the rest of the code for the initial render
            return;
        }
        // removeStar()
    }, [starCount])


    
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
            if(starArr[i].current){ 
                starArr[i].current.style.color = 'orange'
            }
            
        }
        setStarCount(star)
    }
      
      function removeStar(count) {
        // if (stars[starIdx - 1].rated) {
        //   return
        // }
        for (let i = 5; i > count - 1; i--) {
        //   document.getElementsByClassName('star-' + (i + 1))[0].style = "color:gray"
            if(starArr[i - 1].current){
                starArr[i - 1].current.style.color = '#9CA3AF'
            }
        }
        // setStarCount(0)
      }
//nMouseLeave={()=>removeStar()}
    return (
        <>
            <div class="flex" onMouseLeave={()=>setStarCount(0)}>
                <FontAwesomeIcon ref={star1} className='text-gray-400' onMouseEnter={()=>starRate(1)} onMouseLeave={()=>removeStar(starCount)} icon={faStar} style={uncolored} /> 
                <FontAwesomeIcon ref={star2} className='text-gray-400' onMouseEnter={()=>starRate(2)} onMouseLeave={()=>removeStar(starCount)} icon={faStar} style={uncolored} />
                <FontAwesomeIcon ref={star3} className='text-gray-400' onMouseEnter={()=>starRate(3)} onMouseLeave={()=>removeStar(starCount)} icon={faStar} style={uncolored} />
                <FontAwesomeIcon ref={star4} className='text-gray-400' onMouseEnter={()=>starRate(4)} onMouseLeave={()=>removeStar(starCount)} icon={faStar} style={uncolored} />
                <FontAwesomeIcon ref={star5} className='text-gray-400' onMouseEnter={()=>starRate(5)} onMouseLeave={()=>removeStar(starCount)} icon={faStar} style={uncolored} />
            </div>
        </>
    )
}