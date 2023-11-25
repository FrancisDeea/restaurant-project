/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NavLinks from "./nav-links";
import ToggleButton from "./toggleButton";

import { Dict } from "@/dictionaries/types";

export default function Header({ dict }: { dict: Dict }) {

    return (
        <header className="bg-dark flex flex-row justify-around items-center h-12 mt-4 max-w-[1268px] w-[calc(100%-32px)] m-auto rounded-full">
            <Link href="/">
                <img
                    src="/assets/logo-dgrana-tapas-blanco.png"
                    alt="logotipo del restaurante"
                    className="w-auto h-8"
                />
            </Link>
            <div className="hidden md:block">
                <NavLinks dict={dict} />
            </div>

            <div className="md:hidden">
                <ToggleButton />
            </div>
        </header>
    )
}