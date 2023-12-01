/* eslint-disable @next/next/no-img-element */
'use client'

import { useSidebar } from "@/hooks/useSidebar";
import NavLinks from "./nav-links";
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { IconSquareX } from '@tabler/icons-react';
import { Dict } from "@/dictionaries/types";
import LanguageDropMenu from "./LanguageDropMenu";

export default function SideNav({ dict, lang }: { dict: Dict, lang: string }) {
    const { active, toggleActive } = useSidebar()
    const router = useRouter()

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
                        className="w-auto h-10 mb-6"
                    />
                    <p className="">{dict.navLinks.bienvenido}</p>
                    <hr className="mt-2 mb-6" />
                    <NavLinks handleClick={toggleActive} dict={dict} lang={lang} />
                    <hr className="mt-6 mb-6" />
                    <LanguageDropMenu lang={lang} />
                </div>
                <div className="flex flex-col gap-2 text-2xl">
                    <a href="https://instagram.com/dgranatapas" target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=100042860184480" target="_blank">Facebook</a>
                </div>

            </aside>
        </>
    )
}