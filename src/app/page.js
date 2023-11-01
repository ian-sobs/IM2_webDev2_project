import Image from 'next/image'
import welcomePhoto from './(icons)/welcomePhoto.jpg'

export default function home(){
    return(
        <>
            <div className="min-h-screen bg-white px-10 flex flex-wrap content-center">
                <div className="flex flex-wrap flex-col justify-center md:flex-row lg:flex-row xl:flex-row">
                        <div className="flex flex-wrap flex-col content-center justify-center first-letter:w-fit text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl  text-black">
                            <div className="w-fit">
                                <p className="w-fit font-medium mb-[6px]">
                                    Welcome to
                                </p>
                                <div className="w-fit p-[6px] bg-black">
                                    <span className="font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#DC8ECB] from-30% via-[#FFB169] via-60% to-[#FFF8BD] to-90%">Bookii</span>
                                </div>
                            </div>
                            <p className="my-[8px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-full md:w-9/12 lg:w-2/3 xl:w-1/2">
                                Read more, learn more, and buy more with the convenience of having the book arrive at your doorstep with just a tap of your finger.
                            </p>

                            
                        </div>
                       <Image src={welcomePhoto} width={800} height={600}></Image>
                </div>
            </div>
            
        </>
    )

}