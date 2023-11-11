//the book "thumbnail" to display in the market and favorites section
//try to implement streaming using <suspense></suspense>
'use client'
import Image from 'next/image'
import starIcon from '@/icons/starIcon.svg'
import { useRouter } from 'next/navigation'


export default function Card({details, currency, username}){
    const router = useRouter()
    const startStyle = {
        filter: "invert(87%) sepia(34%) saturate(1760%) hue-rotate(330deg) brightness(103%) contrast(101%)",
        width: "47%",
        height: "auto"
    }
    const cardStyle = {
        allWidth: "flex flex-wrap  bg-inherit shadow-lg h-fit hover:cursor-pointer",
        mobile: "w-[146px]  p-[9px]",//h-[260px] 
        md: "md:w-[175px] md:p-[10px]", // md:h-[312px]
        lg: "lg:w-[193px] lg:p-[11px]", //lg:h-[343px]
        xl: "xl:w-[263px] xl:p-[12px]" // xl:h-[468px]
    }
    return (
        <>
            <div name="card" className={`${cardStyle.allWidth} ${cardStyle.mobile} ${cardStyle.md} ${cardStyle.lg} ${cardStyle.xl}`} onClick={()=>router.push(`/${username}/${details.title}`)}>
                <div className="bg-inherit w-full h-full">
                    <div className="h-fit relative" name="bookPhoto">
                        <Image width={612} height={939} src={details.imgSrc} priority={true}></Image>
                    </div>
                    <div name="bookShortDetails" className="pt-[12px] text-black">
                        <div className="flex flex-col justify-center pb-[12px]">
                            <span name="bookTitle" className='text-center font-semibold	text-xl	truncate'>
                                {details.title}
                            </span>
                            <span name="bookAuthor" className='text-center truncate font-light text-base'>
                                {details.author}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div name="bookRatings" className="flex flex-row items-center">
                                <Image src={starIcon} style={startStyle}></Image> <span className='w-fit align-middle font-light h-fit'>{details.ratings}</span>
                            </div>
                            <div name="bookPrice" className="font-light	">
                                {`${currency}${details.price}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}