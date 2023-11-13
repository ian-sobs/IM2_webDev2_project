
'use client'
import { useState , useEffect} from 'react'
import Review from './review'

export default function reviews(){
    const containerStyle = {
        allWidth: "flex bg-white shadow-lg text-black",
        mobile: "flex-col justify-start w-full p-[20px]",
        sm: "sm:p-[30px]"
    }

    return(
        <>
            <div className={`${containerStyle.allWidth} ${containerStyle.mobile} ${containerStyle.sm}`}>
                <p className="mb-[10px] sm:mb-[20px]">Reviews</p>

                <div className="w-full flex flex-col p-[20px] border-t border-slate-500" >
                    <form>
                        <textarea className="w-full bg-gray-200 h-auto p-[8px]" placeholder='Make a review...'></textarea>
                        <button className="bg-green-500 p-[4px] text-white font-semibold rounded-md text-center w-[50px]" type="submit">Post</button>
                    </form>
                </div>
                <section name="reviews ">
                    <Review content="I love this book. It changed my life." username="Sobberns"></Review>
                    <Review content="The birth of the industrial revolution was a mistake that would change the course of humankind throughout history. From it a multitute of atrocities were commited such as child labor and unjust wages just to make more profit." username="Sobberns"></Review>
                    <Review content="Now draw her giving birth" username="Sobberns"></Review>
                    <Review content="I love fanfiction." username="Sobberns"></Review>
                    <Review content="More of this pls" username="Sobberns"></Review>
                    <Review content="I have no enemies." username="Sobberns"></Review>
                    <Review content="I hated the ending" username="Sobberns"></Review>
                </section>
            </div>
        </>
    )
}