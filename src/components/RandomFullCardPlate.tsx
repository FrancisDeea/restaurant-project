/* eslint-disable @next/next/no-img-element */
import { findAllergens } from "@/lib/util";
import { MouseEventHandler } from "react";

interface Plate {
    img: string;
    alt: string;
    name: string;
    price: string;
    description: string | null;
    allergens: string[] | null;
    handleIndex?: MouseEventHandler<HTMLButtonElement>
}

export default function RandomFullCardPlate({ img, alt, name, price, description, allergens, handleIndex }: Plate) {

    return (
        <article className="w-full max-w-[396px] h-[calc(100vh-96px)] bg-black rounded-[40px] overflow-hidden place-self-center lg:col-start-2 relative">
            <button onClick={handleIndex} className="bg-purple-600/70 backdrop-blur-sm p-2 w-[90%] rounded-full border-black font-bold text-light text-lg block hover:scale-95 transition-transform absolute top-4 right-0 left-0 m-auto z-50">¡Sorpréndeme de nuevo!</button>
            <div className="h-[60%] w-full overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    alt={alt}
                    src={img}
                    loading="lazy"
                />
            </div>
            <div className="py-6 px-8 flex flex-col items-center justify-center gap-4 w-full h-[40%]">
                <h3 className="text-xl text-center">{name} <span className="">{price}€</span></h3>
                <p>{description}</p>
                <div className="w-full flex flex-row justify-center gap-2">
                    {
                        allergens?.map(allergen => {
                            const { src, alt } = findAllergens(allergen)
                            return (
                                <img
                                    key={allergen}
                                    src={src}
                                    alt={alt}
                                    width={40}
                                    height={40}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </article>
    )
}