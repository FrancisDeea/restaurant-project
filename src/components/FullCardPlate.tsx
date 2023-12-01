/* eslint-disable @next/next/no-img-element */
import { findAllergens } from "@/lib/util";
import DinamicPlateInfo from "./DinamicPlateInfo";

interface Plate {
    img: string;
    alt: string;
    name: string;
    price: string;
    description: string | null;
    allergens: string[] | null;
    lang: string
}

export default function FullCardPlate({ img, alt, name, price, description, allergens, lang }: Plate) {

    return (
        <article className="w-full max-w-[396px] min-h-[calc(100vh-196px)] lg:min-h-[calc(100vh-148px)] h-full bg-black rounded-[40px] overflow-hidden place-self-center lg:col-start-2 relative">
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