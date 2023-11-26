'use client'
import { Menu } from '@headlessui/react'

export default function RowAction({actions}){
    return(
        <Menu >
        <Menu.Button className='bg-slate-200 rounded-sm p-[5px] text-slate-500'>Action</Menu.Button>
        <Menu.Items >
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
                >
                Account settings
                </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
                <a
                className={`${active && 'bg-blue-500'}`}
                href="/account-settings"
                >
                Documentation
                </a>
            )}
            </Menu.Item>
            <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
        </Menu.Items>
        </Menu>

    )
}