
import user  from '@/components/getUsrCookie'
import CardsDisplay from '@/components/listOfCards/cardsDisplay';
// import cardsDisplay from '@/components/listOfCards/cardsDisplay';

export default function Page(){
    // const userInfo = cookies().get("userCredentials")
    // const user = JSON.parse(userInfo.value)
    // console.log("userInfo", user) 
    const userInfo = user()

    const sectionGridStyle = {
        allWidth: "min-h-screen  pt-[25px]  bg-[#ffedd5] pb-[20px] grid place-items-center gap-6",
        mobile:"grid-cols-2 px-9",
        sm:"sm:px-11 sm:grid-cols-2",
        md:"md:px-14 md:grid-cols-3",
        lg:"lg:px-20 lg:grid-cols-4 ",
        xl:"xl:px-22 xl:grid-cols-4"
    }

    return (
    <>
    {/* space-x-9 space-y-9 */}
        <section name="sectionGrid" className={`${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
            
                    {/* {books.map((book, index)=><Card key={index} details={book}></Card>)} */}
                
            <CardsDisplay currency={userInfo["crrncyCode"]} tabStyles="col-span-2 md:col-span-3 lg:col-span-4" requestURL="/user/favorites/api" username={userInfo["username"]}></CardsDisplay>

        </section>
    
    </>
    )
}