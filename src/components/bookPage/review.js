'use client'
export default function review({content, username}){
    return(
        <>
            <div className="w-full flex flex-col p-[20px] border-t border-slate-500">
                <p className="mb-[7px]"><span className="font-semibold">@{username}</span> reviewed on 2023-02-05:</p>
                <p>{content}</p>
                
            </div>
        </>
    )
}