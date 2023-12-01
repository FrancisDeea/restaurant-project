import { Dict } from "@/dictionaries/types"
import Link from "next/link"

export default function NavLinks({ handleClick, dict, lang }: { handleClick?: () => void, dict: Dict, lang: string }) {

    return (
        <nav>
            <ul className="list-none flex flex-col gap-4 font-extrabold text-medium text-xl lg:flex-row lg:gap-8 lg:text-light">

                <li className="lg:hover:scale-125 transition-transform"><Link onClick={handleClick} href={`/${lang}`}>{dict.navLinks.home}</Link></li>
                <li className="lg:hover:scale-125 transition-transform"><Link onClick={handleClick} href={`/${lang}/menu`}>{dict.navLinks.carta}</Link></li>
                <li className="lg:hover:scale-125 transition-transform"><Link onClick={handleClick} href={`/${lang}/#contact`}>{dict.navLinks.contacto}</Link></li>
                <li className="lg:hover:scale-125 transition-transform text-green-400"><Link onClick={handleClick} href={`/${lang}/sorprendeme`}>{dict.navLinks.sorprendeme}</Link></li>
            </ul>
        </nav>
    )
}