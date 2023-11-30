/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NavLinks from "./nav-links";
import ToggleButton from "./toggleButton";

import { Dict } from "@/dictionaries/types";
import LanguageDropMenu from "./LanguageDropMenu";
import Cart from "./Cart";

export default function Header({ dict, lang }: { dict: Dict, lang: string }) {

    return (
        <header className="bg-dark flex flex-row justify-around items-center h-12 mt-4 max-w-[1268px] w-[calc(100%-32px)] m-auto rounded-full">
            <Link href={`/${lang}`}>
                <img
                    src="/assets/logo-dgrana-tapas-blanco.png"
                    alt="logotipo del restaurante"
                    className="w-auto h-8"
                />
            </Link>
            <div className="hidden lg:block">
                <NavLinks dict={dict} lang={lang} />
            </div>

            <div className="hidden lg:flex lg:flex-row lg:gap-6">
                <LanguageDropMenu />
                <Cart />
            </div>

            <div className="flex flex-row item-center justify-center gap-4 lg:hidden">
                <ToggleButton />
                <Cart />
            </div>
        </header>
    )
}