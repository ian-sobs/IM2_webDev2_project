//the book "thumbnail" to display in the market and favorites section
//try to implement streaming using <suspense></suspense>
import Image from 'next/image'
import starIcon from '@/icons/starIcon.svg'
import userCookie from '@/components/getUsrCookie'

export default function Card({details}){
    const user = userCookie()
    const startStyle = {
        filter: "invert(87%) sepia(34%) saturate(1760%) hue-rotate(330deg) brightness(103%) contrast(101%)"
    }
    return (
        <>
            <div className="flex flex-wrap  bg-slate-100 w-[365px] h-[650px] p-[20px] mb-[45px]">
                <div className="bg-inherit	 w-full h-full">
                    <div className="h-fit relative" name="bookPhoto">
                        <Image width={612} height={939} src={details.imgSrc}></Image>
                    </div>
                    <div name="bookShortDetails" className="pt-[15px] text-black">
                        <div className="flex flex-col justify-center pb-[16px]">
                            <span name="bookTitle" className='text-center font-semibold	text-xl	'>
                                {details.title}
                            </span>
                            <span name="bookAuthor" className='text-center'>
                                {details.author}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div name="bookRatings" className="flex flex-row content-center">
                                <Image src={starIcon} style={startStyle}></Image> <span>{details.ratings}</span>
                            </div>
                            <div name="bookPrice">
                                {`${user["crrncyCode"]}${details.price}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}