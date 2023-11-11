export default function book(){
    const sectionGridStyle = {
        allWidth: "min-h-screen bg-white pt-[25px] pb-[20px] ",
        mobile:"px-9 ",
        sm:"sm:px-11 ",
        md:"md:px-14 ",
        lg:"lg:px-20 ",
        xl:"xl:px-22 "
    }

    return (
        <>
            {/* space-x-9 space-y-9 */}
                <section name="sectionGrid" className={`${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
                    
                        
                    

                </section>
            
            </>
        )
}