export default function books(){
    const sectionGridStyle = {
        allWidth: "min-h-screen pt-[25px] bg-slate-100 pb-[20px] grid place-items-center gap-6 w-full",
        mobile:"grid-cols-2 px-9",
        sm:"sm:px-11 sm:grid-cols-2",
        md:"md:px-14 md:grid-cols-3",
        lg:"lg:px-20 lg:grid-cols-4 ",
        xl:"xl:px-22 xl:grid-cols-4"
    }
    return(
        <>
            <section name="sectionGrid" className={`${sectionGridStyle.allWidth} ${sectionGridStyle.mobile} ${sectionGridStyle.sm} ${sectionGridStyle.md} ${sectionGridStyle.lg} ${sectionGridStyle.xl}`}>
            
               
            </section>
        </>
    )
}