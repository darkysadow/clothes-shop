"use client"

import Link from "next/link";
import { useState } from "react"

export default function BurgerTrigger() {
    const [opened, setOpened] = useState(false);
    const toggleOpen = () => {
        opened ? setOpened(false) : setOpened(true)
    }
    return (
        <div className="p-4 space-y-2 rounded shadow relative hidden max-md:block z-50" onClick={toggleOpen}>
            {!opened && <>
                <span className="block w-8 h-0.5 bg-gray-100"></span>
                <span className="block w-8 h-0.5 bg-gray-100"></span>
                <span className="block w-8 h-0.5 bg-gray-100"></span></>
            }
            {opened && <>
                <span className="block w-8 h-0.5 bg-red-100 rotate-45 translate-y-1.5"></span>
                <span className="block w-8 h-0.5 bg-gray-100 -rotate-45 -translate-y-1"></span>
                <span className="block w-8 h-0.5 bg-none"></span>
            </>}
            {opened && <>
                <div className="absolute right-[1.645rem] w-3 h-3 bg-slate-800 text-white rotate-45 bottom-[0.1rem] z-50"></div>
                <div className="absolute right-6  z-50 flex flex-col p-4 text-white bg-slate-800 items-end rounded-sm rounded-se-none space-y-4">
                    <Link href={'/products'}>Products</Link>
                    <Link href={'/contacts'}>Contacts</Link>
                    <Link href={'/'}>Home</Link>
                </div>
            </>}
        </div>
    )
}