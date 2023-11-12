/* eslint-disable @next/next/no-img-element */
interface Plate {
    img: string;
    alt: string;
    name: string;
    price: string
}

export default function CardPlate({ img, alt, name, price }: Plate) {

    return (
        <article className="w-full max-w-[396px] bg-black rounded-[40px] overflow-hidden">
            <div className="h-56 w-full overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    alt={alt}
                    src={img}
                />
            </div>
            <div className="py-6 px-8 flex flex-col items-center justify-center gap-3 w-full h-32">
                <h3 className="text-xl text-center">{name} <span className="">{price}€</span></h3>
                <p className="text-xs">Pulsa para más detalles</p>
            </div>
        </article>
    )
}