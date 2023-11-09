export default function cardsDisplay({children}){
    return(
        <>
            <div className="flex flex-wrap justify-between">

                {children}
                
            </div>
        </>
    )
}