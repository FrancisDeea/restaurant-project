import Link from "next/link"

export default function NavLinks({ handleClick }: { handleClick?: () => void }) {

    return (
        <nav>
            <ul className="list-none flex flex-col gap-4 font-extrabold text-medium text-xl md:flex-row md:gap-8 md:text-light">
                
                <li className="hover:scale-125 transition-transform"><Link onClick={handleClick} href="/">Home</Link></li>
                <li className="hover:scale-125 transition-transform"><Link onClick={handleClick} href="/menu">Carta</Link></li>
                <li className="hover:scale-125 transition-transform"><Link onClick={handleClick} href="#contact">Contacto</Link></li>
            </ul>
        </nav>
    )
}