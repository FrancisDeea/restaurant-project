'use client';

import { useState } from 'react'
import { IconCircleArrowDownFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageDropMenu({ lang }: { lang: string }) {
    const [show, setShow] = useState(false)
    const currentPath = usePathname()
    const router = useRouter()

    const initial = !show ? 'animate-fade block' : 'animate-jump-out hidden'
    const langStyle = show ? 'animate-jump-in block' : 'hidden'


    const handleLang = (e: React.MouseEvent) => {
        const newLang = (e.target as HTMLButtonElement).value
        const currentLang = currentPath.match(/^\/[a-z][a-z]/i)?.join("")

        if (newLang !== currentLang && currentLang) {
            const newPath = currentPath.replace(currentLang, newLang)
            router.push(newPath)
        }

        setShow(!show)
    }

    return (
        <>
            <div className="flex flex-row items-center justify-center cursor-pointer bg-purple-700 px-3 py-1 w-[150px] min-w-max h-8 rounded-full font-extrabold">
                <div onClick={() => setShow(!show)} className={`${initial} flex flex-row items-center justify-center gap-1`}>
                    <span>{lang === 'en' ? 'Idioma' : 'Language'}</span>
                    <IconCircleArrowDownFilled size={20} />
                </div>

                <div className={`${langStyle} flex flex-row items-center justify-center gap-1 w-full`}>

                    <button
                        onClick={(e) => handleLang(e)}
                        value="/es"
                        className='px-1'
                    >
                        🇪🇸 ES
                    </button>
                    <span>/</span>
                    <button
                        onClick={(e) => handleLang(e)}
                        value="/en"
                        className='px-1'
                    >
                        🇬🇧 EN
                    </button>
                </div>

                {/* <div className={`flex flex-col gap-1 w-[150px] ${langStyle} animate-duration-200 absolute top-12 left-0 z-20 bg-slate-100 rounded-md text-slate-800 overflow-hidden`}>
                    <button
                        onClick={(e) => handleLang(e)}
                        value="/es"
                        className='hover:bg-slate-200 w-full px-3 py-1'
                    >
                        🇪🇸 Español
                    </button>
                    <button
                        onClick={(e) => handleLang(e)}
                        value="/en"
                        className='hover:bg-slate-200 w-full px-3 py-1'
                    >
                        🇬🇧 Inglés
                    </button>
                </div> */}
            </div>
        </>
    );
}
