import { Dict } from "@/dictionaries/types";

export default function ContactSection({ dict }: { dict: Dict }) {

    return (
        <section id="contact" className="bg-dark flex flex-col gap-4 lg:row-span-3 lg:col-auto animate-fade-up animate-duration-300 animate-delay-200 order-last lg:order-none shadow-lg">
            <header>
                <h2>{dict.contactSection.title}</h2>
            </header>
            <iframe
                className="w-full flex-1 rounded-xl aspect-video"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBBt4vEsmJK9ZSl3p9D4c-J-99eTkFrEdo&q=D’Graná+Tapas&zoom=16`}
                allowFullScreen
                loading="lazy">
            </iframe>
            <hr className="my-3" />
            <div className="text-base lg:text-lg flex flex-col gap-4">
                <time>{dict.contactSection.time1}</time>
                <time>{dict.contactSection.time2}</time>
                <address>Calle Casablanca, nº 30, local 2</address>
            </div>
        </section>
    )
}