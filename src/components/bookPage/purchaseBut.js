'use client'
import Image from 'next/image'
import cartAdd from '@/icons/addToCart.svg'

export default function purchase(props){
    let style = {
        filter: "invert(92%) sepia(100%) saturate(0%) hue-rotate(202deg) brightness(106%) contrast(106%)"
    }
    return (
        <>
            <button className="bg-green-500 p-[4px] px-[9px] rounded-full text-white font-semibold flex flex-row items-center">
                <Image src={cartAdd} className="mr-[4px]" style={style} alt="AddToCart"></Image>
                <div className="flex flex-row">
                    <span className="mr-[4px]">{`${props.userInfo.crrncyCode}`}</span>
                    {`${props.bookInfo.priceUSD}`}
                </div>

            </button>
        </>
    )
}