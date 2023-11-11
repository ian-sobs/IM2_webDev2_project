//the book "thumbnail" to display in the market and favorites section
//try to implement streaming using <suspense></suspense>
import Image from 'next/image'
import starIcon from '@/icons/starIcon.svg'


export default function Card({details, currency}){
    const startStyle = {
        filter: "invert(87%) sepia(34%) saturate(1760%) hue-rotate(330deg) brightness(103%) contrast(101%)"
    }
    const cardStyle = {
        allWidth: "flex flex-wrap  bg-inherit shadow-lg ",
        mobile: "w-[146px] p-[10px]",//h-[260px] 
        md: "md:w-[175px]md:p-[12px]", // md:h-[312px]
        lg: "lg:w-[193px]  lg:p-[14px]", //lg:h-[343px]
        xl: "xl:w-[263px] xl:p-[16px]" // xl:h-[468px]
    }
    return (
        <>
            <div name="card" className={`${cardStyle.allWidth} ${cardStyle.mobile} ${cardStyle.md} ${cardStyle.lg} ${cardStyle.xl}`}>
                <div className="bg-inherit w-full h-full">
                    <div className="h-fit relative" name="bookPhoto">
                        <Image width={612} height={939} src={details.imgSrc}></Image>
                    </div>
                    <div name="bookShortDetails" className="pt-[15px] text-black">
                        <div className="flex flex-col justify-center pb-[16px]">
                            <span name="bookTitle" className='text-center font-semibold	text-xl	truncate'>
                                {details.title}
                            </span>
                            <span name="bookAuthor" className='text-center truncate'>
                                {details.author}
                            </span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div name="bookRatings" className="flex flex-row content-center">
                                <Image src={starIcon} style={startStyle}></Image> <span>{details.ratings}</span>
                            </div>
                            <div name="bookPrice">
                                {`${currency}${details.price}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}