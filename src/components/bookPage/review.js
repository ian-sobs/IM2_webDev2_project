'use client'
export default function review({info}){

    return(
        <>
            <div className="w-full flex flex-col p-[20px] border-t border-slate-500">
                <p className="mb-[7px]"><span className="font-semibold">@{info.username}</span> reviewed on {info.datePosted}:</p>
                <p>{info.content}</p>
                
            </div>
        </>
    )
}