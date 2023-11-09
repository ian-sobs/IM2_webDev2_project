//the book "thumbnail" to display in the market and favorites section
//try to implement streaming using <suspense></suspense>
import Image from 'next/image'
import lotr from '@/app/images/lotr.jpeg'
import starIcon from '@/icons/starIcon.svg'

export default function Card(){
    const startStyle = {
        filter: "invert(87%) sepia(34%) saturate(1760%) hue-rotate(330deg) brightness(103%) contrast(101%)"
    }
    return (
        <>
            <div className="flex flex-wrap  bg-slate-100 w-[365px] h-[650px] p-[20px] mb-[36px]">
                <div className="bg-inherit	 w-full h-full">
                    <div className="h-fit relative" name="bookPhoto">
                        <Image width={612} height={939} src="https://cdn.kobo.com/book-images/7a557cb3-f72a-47c3-992b-951c9566e4d4/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg"></Image>
                    </div>
                    <div name="bookShortDetails" className="pt-[15px] text-black">
                        <div className="flex flex-col justify-center pb-[16px]">
                            <span name="bookTitle" className='text-center font-semibold	text-xl	'>
                                Book title sample
                            </span>
                            <span name="bookAuthor" className='text-center'>
                                Book author sample
                            </span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div name="bookRatings" className="flex flex-row content-center">
                                <Image src={starIcon} style={startStyle}></Image> <span>4.7</span>
                            </div>
                            <div name="bookPrice">
                                USD13.99
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}