/* eslint-disable @next/next/no-img-element */
import NavLinks from "./nav-links";
import ToggleButton from "./toggleButton";

export default function Header() {

    return (
        <header className="bg-dark flex flex-row justify-around items-center h-12">
            <img
                src="/assets/logo-dgrana-tapas-blanco.png"
                alt="logotipo del restaurante"
                className="w-auto h-8"
            />
            <div className="hidden md:block">
                <NavLinks />
            </div>

            <div className="md:hidden">
                <ToggleButton />
            </div>
        </header>
    )
}