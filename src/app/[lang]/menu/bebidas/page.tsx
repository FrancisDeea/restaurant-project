import { getDictionary } from "../../dictionaries"
import type { Dict } from "@/dictionaries/types"

export default async function Bebidas({ params: { lang } }: { params: { lang: string } }) {
    const dict: Dict = await getDictionary(lang)
    const drinks = dict.drinkSection

    return (
        <>
            <section className="bg-black/60 max-w-[800px] w-full lg:col-span-full lg:place-self-center lg:text-xl">
                <div className="flex flex-col gap-2 p-2 w-full lg:gap-8">

                    <header>
                        <h1>{drinks.title}</h1>
                    </header>

                    <div className="w-full">
                        <h2 className="text-left text-amber-200">{drinks.refrescos}</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />


                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Coca-Cola original / zero / zero-zero
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.70
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.fanta}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.70
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.nestea}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.70
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.tonica}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.70
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.tinto_verano_1}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.70
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.tinto_verano_2}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.70
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.tinto_verano_3}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.50
                            </p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-left text-amber-200">{drinks.vino_tinto}</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Rioja
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.00
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Ribera
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.50
                            </p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-left text-amber-200">{drinks.vino_blanco}</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />


                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Verdejo
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.00
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Frizzante
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.00
                            </p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-left text-amber-200">{drinks.cerveza_grifo})</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />


                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.caña}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.20
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.copa}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.30
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.pinta}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.80
                            </p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-left text-amber-200">{drinks.bottle}</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />


                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Alhambra especial
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.80
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Alhambra 1925
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.50
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Alhambra Reserva Roja
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.50
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Alhambra IPA
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                3.50
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.radler}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.80
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                San Miguel 0.0
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.80
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.gluten}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.80
                            </p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-left text-amber-200">{drinks.copas}</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />


                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Normal
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                5.50
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                Premium
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                6.50
                            </p>
                        </article>
                    </div>

                    <div>
                        <h2 className="text-left text-amber-200">{drinks.cafe}</h2>
                        <hr className="border-none h-[1px] bg-amber-100 mb-2" />


                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.cafe_tipos}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                1.50
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.bombon}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                2.00
                            </p>
                        </article>

                        <article className="w-full">
                            <p className="w-[80%] inline-block">
                                {drinks.te}
                            </p>

                            <p className="w-[20%] inline-block text-right">
                                1.50
                            </p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}