import Link from "next/link"

export default function NavLinksSideBar() {

    return (
        <nav>
            <ul className="list-none flex flex-col gap-4 font-extrabold text-medium">
                <li className="hover:scale-125 transition-transform"><Link href="">Home</Link></li>
                <li className="hover:scale-125 transition-transform"><Link href="">Carta</Link></li>
                <li className="hover:scale-125 transition-transform"><Link href="">Contacto</Link></li>
            </ul>
        </nav>
    )
}