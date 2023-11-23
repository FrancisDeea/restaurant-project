import Button from "./button"

export default function HomeSection() {

    return (
        <section id="home" className="flex justify-center items-center bg-homebg bg-cover saturate-[1.3] lg:col-span-2 animate-fade-up animate-once animate-duration-300 animate-ease-in-out shadow-lg">
            <header className="flex flex-col gap-3">
                <h1 className="font-extrabold leading-9">
                    <span className="text-6xl bg-dinamicText3 bg-clip-text text-transparent">D&apos;Graná Tapas</span><br />
                    <span className="pride">Torremolinos</span><br />
                    <span className="text-white">Almuerzos y Cenas</span>
                </h1>
                <p className="text-xl">Disfruta de tu bebida con tapa gratis, además de una amplia selección de platos y raciones. Al más puro estilo granadino y sin moverte de la costa del sol - Torremolinos, Málaga.</p>
                <Button value="Ver Menú" url="/menu" />
            </header>
        </section>
    )
}