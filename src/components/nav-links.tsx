import { Dict } from "@/dictionaries/types"
import Link from "next/link"

export default function NavLinks({ handleClick, dict }: { handleClick?: () => void, dict: Dict }) {

    return (
        <nav>
            <ul className="list-none flex flex-col gap-4 font-extrabold text-medium text-xl md:flex-row md:gap-8 md:text-light">

                <li className="hover:scale-125 transition-transform"><Link onClick={handleClick} href="/">{dict.navLinks.home}</Link></li>
                <li className="hover:scale-125 transition-transform"><Link onClick={handleClick} href="/menu">{dict.navLinks.carta}</Link></li>
                <li className="hover:scale-125 transition-transform"><Link onClick={handleClick} href="/#contact">{dict.navLinks.contacto}</Link></li>
                <li className="hover:scale-125 transition-transform text-green-400"><Link onClick={handleClick} href="/sorprendeme">{dict.navLinks.sorprendeme}</Link></li>
            </ul>
        </nav>
    )
}