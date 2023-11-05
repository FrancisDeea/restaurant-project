/* eslint-disable @next/next/no-img-element */
'use client'

import { useSidebar } from "@/hooks/useSidebar";
import NavLinks from "./nav-links";

export default function SideNav() {
    const { active, toggleActive } = useSidebar()

    const toggleSidebarStyle = active ? `visible w-60` : `invisible w-0`
    const toggleBackgroundStyle = active ? `visible opacity-80` : `invisible opacity-0`

    return (
        <>
            <div
                onClick={toggleActive}
                className={`${toggleBackgroundStyle} absolute inset-0 bg-dark z-50 transition-opacity`}
            >
            </div>
            <aside className={`${toggleSidebarStyle} h-screen flex flex-col justify-between bg-dark fixed inset-0 z-[999] p-6 font-extrabold text-light overflow-hidden transition-all`}>
                <div>
                    <img
                        src="/assets/logo-dgrana-tapas-blanco.png"
                        alt="logotipo del restaurante"
                        className="w-auto h-8 mb-6"
                    />
                    <p className="">¡Bienvenido!</p>
                    <hr className="mt-2 mb-6" />
                    <NavLinks />
                    <hr className="mt-6 mb-2" />
                    <p className="">¡Sorpréndeme!</p>

                </div>
                <div className="flex flex-col">
                    <span>Instagram</span>
                    <span>Facebook</span>
                </div>


            </aside>
        </>
    )
}