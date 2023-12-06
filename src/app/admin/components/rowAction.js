'use client'
import { Menu, Transition} from '@headlessui/react'
// import { useState } from 'react'

export default function RowAction({actions, children, positioning, bookID}){
    // let [modalOpen, setModalOpen] = useState(false)

    return(
        <Menu >
            <Menu.Button className='bg-slate-200 rounded-sm p-[5px] text-slate-500'>{children}</Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items as='div' className={`bg-white border border-slate-200 shadow-xl p-[8px] ${positioning} inline-block z-50`}>
                    {actions.map((action)=>{
                        return (
                            <Menu.Item key={action.name} as='button' className={`p-[8px] w-full rounded-sm ui-active:${action.activeBgColor} ui-active:${action.activeTextColor} ui-not-active:bg-white ui-not-active:text-black`} onClick={()=>action.behavior(bookID)}>
                                {action.name}
                            </Menu.Item>    
                        )
                    })}

                </Menu.Items>
            </Transition>
        </Menu>

    )
}