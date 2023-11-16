/* eslint-disable @next/next/no-img-element */
import { findAllergens } from "@/lib/util";

interface Plate {
    img: string;
    alt: string;
    name: string;
    price: string;
    description: string | null;
    allergens: string[] | null;
}

export default function FullCardPlate({ img, alt, name, price, description, allergens }: Plate) {

    return (
        <article className="w-full max-w-[396px] h-[calc(100vh-96px)] bg-black rounded-[40px] overflow-hidden">
            <div className="h-[60%] w-full overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    alt={alt}
                    src={img}
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