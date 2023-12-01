/* eslint-disable @next/next/no-img-element */
import { MouseEventHandler } from "react";
import DinamicPlateInfo from "./DinamicPlateInfo";

interface Plate {
    img: string;
    alt: string;
    name: string;
    price: string;
    description: string | null;
    allergens: string[] | null;
    handleIndex?: MouseEventHandler<HTMLButtonElement>
    lang: string
}

export default function RandomFullCardPlate({ img, alt, name, price, description, allergens, handleIndex, lang }: Plate) {

    return (
        <article className="w-full max-w-[396px] min-h-[calc(100vh-196px)] lg:min-h-[calc(100vh-148px)] h-full bg-black rounded-[40px] overflow-hidden place-self-center lg:col-start-2 relative">
            <button onClick={handleIndex} className="bg-purple-600/70 backdrop-blur-sm p-2 w-[90%] rounded-full border-black font-bold text-light text-lg block hover:scale-95 transition-transform absolute top-4 right-0 left-0 m-auto z-50">{lang === "es" ? '¡Sorpréndeme de nuevo!' : 'Surprise me again!'}</button>
            <div className="h-[400px] w-full overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    alt={alt}
                    src={img}
                    loading="lazy"
                />
            </div>
            <div className="py-12 px-8 flex flex-col items-center justify-center gap-4 w-full min-h-max h-[calc(100%-400px)]">
                <h3 className="text-xl text-center">{name} <span className="">{price}€</span></h3>
                {description ? <p>{description}</p> : null}
                <DinamicPlateInfo name={name} allergens={allergens} lang={lang} />
            </div>
        </article>
    )
}