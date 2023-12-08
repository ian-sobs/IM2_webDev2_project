//the book "thumbnail" to display in the market and favorites section
//try to implement streaming using <suspense></suspense>
'use client'
import Image from 'next/image'
import starIcon from '@/icons/starIcon.svg'
import { useRouter } from 'next/navigation'



export default function Card({details, localCurrPerUSD, currency, username}){
    const router = useRouter()
    const startStyle = {
        filter: "invert(87%) sepia(34%) saturate(1760%) hue-rotate(330deg) brightness(103%) contrast(101%)",
        // width: "20px",
        height: "auto"
    }
    const cardStyle = {
        allWidth: "flex flex-wrap  bg-white shadow-lg  hover:cursor-pointer rounded-md ",
        mobile: "w-[146px]  p-[9px] ",//h-[260px] 
        md: "md:w-[175px] md:p-[10px] ", // md:h-[312px]
        lg: "lg:w-[193px] lg:p-[11px] ", //lg:h-[343px]
        xl: "xl:w-[263px] xl:p-[12px] " // xl:h-[468px]
    }

    console.log(parseFloat(details.price).toFixed(2))

    return (
        <>
            <div name="card" className={`${cardStyle.allWidth} ${cardStyle.mobile} ${cardStyle.md} ${cardStyle.lg} ${cardStyle.xl}`} onClick={()=>router.push(`/${username}/${details.title}?bookID=${details.bookID}`)}>
                <div className="bg-inherit w-full h-full">
                    <div className="h-fit relative" name="bookPhoto">
                        <Image width={939} height={612} src={details.imgSrc} priority={true} alt={details.title}></Image>
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
                        <div className="flex flex-col items-center md:flex-row justify-between">
                            <div name="bookRatings" className="flex flex-row items-center">
                                <Image className="w-[20px] md:w-[24px]" src={starIcon} style={startStyle} alt="star"></Image> <span className='w-fit align-middle font-light h-fit'>{details.ratings}</span>
                            </div>
                            <div name="bookPrice" className="font-light flex flex-row truncate">
                                <span className=' mr-[4px]'>{`${currency}`}</span> {`${(parseFloat(details.price)).toFixed(2)}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}