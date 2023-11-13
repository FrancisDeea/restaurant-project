/* eslint-disable @next/next/no-img-element */
'use client'

import { useSidebar } from "@/hooks/useSidebar";
import NavLinks from "./nav-links";
import { IconSquareX } from '@tabler/icons-react';

export default function SideNav() {
    const { active, toggleActive } = useSidebar()

    // const toggleSidebarStyle = active ? `visible w-60` : `invisible w-0`
    const toggleSidebarStyle = active ? `visible opacity-100` : `opacity-0 invisible h-0`
    const toggleBackgroundStyle = active ? `visible opacity-80` : `invisible opacity-0`

    return (
        <>
            <div
                onClick={toggleActive}
                className={`${toggleBackgroundStyle} fixed inset-0 bg-dark z-50 transition-opacity`}
            >
            </div>
            <aside className={`${toggleSidebarStyle} h-full w-[calc(100%-32px)] rounded-t-3xl flex flex-col justify-around bg-dark fixed top-4 z-[999] p-6 font-extrabold text-light text-xl overflow-hidden transition-all`}>
                <IconSquareX onClick={toggleActive} className="absolute top-6 right-6" size={38} />
                <div>
                    <img
                        src="/assets/logo-dgrana-tapas-blanco.png"
                        alt="logotipo del restaurante"
                        className="w-auto h-8 mb-6"
                    />
                    <p className="">¡Bienvenido!</p>
                    <hr className="mt-2 mb-6" />
                    <NavLinks handleClick={toggleActive} />
                    <hr className="mt-6 mb-2" />
                    <p className="">¡Sorpréndeme!</p>

                </div>
                <div className="flex flex-col gap-2 text-2xl">
                    <a href="https://instagram.com/dgranatapas" target="_blank">Instagram</a>
                    <a href="https://facebook.com/dgranatapas" target="_blank">Facebook</a>
                </div>

            </aside>
        </>
    )
}