import CardFullDetails from '@/components/bookPage/cardFullDetails'
// import Rating from '@/components/bookPage/rating'

export default function book({searchParams}){
    const sectionGridStyle = {
        allWidth: "min-h-screen bg-slate-100 pt-[25px] pb-[20px] flex flex-row w-full justify-center",
        mobile:"px-9 ",
        sm:"sm:px-3 ",
        md:"md:px-4 ",
        lg:"lg:px-20 ",
        alg: "alg:px-28",
        xl:"xl:px-32 "
    }

    return (
        <>
            {/* space-x-9 space-y-9 */}
                <section name="sectionGrid" className={`${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
                    
                    <CardFullDetails searchParams={searchParams}></CardFullDetails>
                    
                </section>
            
            </>
        )
}