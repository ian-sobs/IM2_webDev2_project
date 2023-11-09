//the book "thumbnail" to display in the market and favorites section
//try to implement streaming using <suspense></suspense>
import Image from 'next/image'
import starIcon from '@/icons/starIcon.svg'
import userCookie from '@/components/getUsrCookie'

export default function Card({details}){
    const user = userCookie()
    const startStyle = {
        filter: "invert(87%) sepia(34%) saturate(1760%) hue-rotate(330deg) brightness(103%) contrast(101%)",
    }
    const cardStyle={
        marginLeft: "5%", 
        marginRight:"5%", 
        marginBottom:"3%", 
        padding:"2%",
        
    }
    
    // xl:p-[20px] xl:mb-[45px] xl:mx-[30px]
    return (
        <>
            <div className="flex flex-wrap  bg-slate-100 w-[120px] h-[216px] sm:w-[200px] sm:h-[360px] md:w-[240px] md:h-[432px] lg:w-[270px] lg:h-[486px] xl:w-[292px] xl:h-[526px] axl:w-[297px] axl:h-[534px] axl1:w-[330px] axl1:h-[594px] axl2:w-[365px] axl2:h-[650px] p-[8px] mb-[10px] mx-[7px] sm:p-[9px] sm:mb-[18px] sm:mx-[12px] md:p-[13px] md:mb-[28px] md:mx-[18px] lg:p-[17px] lg:mb-[39px] lg:mx-[27px] xl:p-[20px] xl:mb-[45px] xl:mx-[30px]">
                <div className="bg-inherit	 w-full h-full">
                    <div className="relative" name="bookPhoto">
                        <Image width={612} height={939} src={details.imgSrc}></Image>
                    </div>
                    <div name="bookShortDetails" className="pt-[8px] sm:pt-[10px] md:pt-[12px] lg:pt-[14px] xl:pt-[16px] text-black flex flex-col justify-between">
                        <div className="flex flex-col justify-center pb-[9px] sm:pb-[11px] md:pb-[13px] lg:pb-[15px] xl:pb-[16px]">
                            <span name="bookTitle" className='text-center font-semibold	text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl truncate'>
                                {details.title}
                            </span>
                            <span name="bookAuthor" className='text-xs sm:text-xs md:text-xs lg:text-base xl:text-base text-center truncate'>
                                by {details.author}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <div name="bookRatings" className="text-xs sm:text-xs md:text-xs lg:text-base xl:text-base ">
                                <Image src={starIcon} className="inline-block align-middle w-[17px] sm:w-[19px] md:w-[21px] lg:w-[23px] xl:w-[26px]" style={startStyle}></Image> 
                                <span className="align-middle inline-block">{details.ratings}</span>
                            </div>
                            <div name="bookPrice" className='text-xs sm:text-xs md:text-xs lg:text-base xl:text-base '>
                                {`${user["crrncyCode"]}${details.price}`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}