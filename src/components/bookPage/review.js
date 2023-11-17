'use client'
export default function review({info}){
    console.log(typeof(info.datePosted))
    return(
        <>
            <div className="w-full flex flex-col p-[20px] border-t border-slate-500">
                <p className="mb-[7px]"><span className="font-semibold text-cyan-600">@{info.username}</span> reviewed on {info.datePosted.substring(0,10).replace(/[-]/g, '/')}:</p>
                <pre className="font-light" style={{fontFamily: "inherit"}}>{info.content}</pre>
                
                
            </div>
        </>
    )
}