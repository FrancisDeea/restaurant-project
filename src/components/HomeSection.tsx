import Button from "./button"
import { Dict } from "@/dictionaries/types"

export default function HomeSection({ dict, lang }: { dict: Dict, lang: string }) {

    return (
        <section id="home" className="flex justify-center items-center bg-homebg bg-cover saturate-[1.3] lg:col-span-2 animate-fade-up animate-once animate-duration-300 animate-ease-in-out shadow-lg">
            <header className="flex flex-col gap-3">
                <h1 className="font-extrabold leading-9">
                    <span className="text-6xl bg-dinamicText3 bg-clip-text text-transparent">D&apos;Graná Tapas</span><br />
                    <span className="pride">Torremolinos</span><br />
                    <span className="text-white">{dict.homeSection.subtitle}</span>
                </h1>
                <p className="text-xl">{dict.homeSection.description}</p>
                <Button value={dict.homeSection.button} url={`/${lang}/menu`} />
            </header>
        </section>
    )
}