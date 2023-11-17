'use client'
import Image from 'next/image'
import heart from '@/icons/heart.svg'
import { useState, useEffect } from 'react'

export default function faveButton(props){
    const [faved, setFaved] = useState(false)
    useEffect(()=>{

    }, [])
    let style = {
        filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
    }

    if(faved){
        return (
            <>
                <button className="bg-red-400 py-[6px] px-[9px] rounded-full text-white font-semibold flex flex-row items-center" onClick={()=>setFaved(false)}>
                    <Image className="mr-[4px]" style={style} src={heart} alt="heartIcon"></Image>
                    Remove from favorites
                </button>
            </>
        )
    }

    return (
        <>
            <button className="bg-slate-200 py-[6px] px-[9px] rounded-full text-black hover:bg-red-400 fill-[#000000] hover:fill-white hover:text-white font-semibold flex flex-row items-center" onClick={()=>setFaved(true)}>
                {/* <Image className="mr-[4px] fill-[#000000] hover:fill-white" src={heart} alt="heartIcon"></Image> */}
                <svg className="mr-[4px] " xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"/></svg>
                Add to favorites
            </button>
        </>
    )
}