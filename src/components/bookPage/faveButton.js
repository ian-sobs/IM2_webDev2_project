'use client'
import Image from 'next/image'
import heart from '@/icons/heart.svg'
import { useState, useEffect } from 'react'

export default function faveButton(props){
    useEffect(()=>{

    }, [])
    let style = {
        filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
    }

    return (
        <>
            <button className="bg-red-400 py-[6px] px-[9px] rounded-full text-white font-semibold flex flex-row items-center">
                <Image className="mr-[4px]" style={style} src={heart} alt="heartIcon"></Image>
                Add to favorites
            </button>
        </>
    )
}