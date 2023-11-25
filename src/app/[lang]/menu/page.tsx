import Category from "@/components/category";
import type { Metadata } from "next";

import type { Dict } from "@/dictionaries/types";
import { getDictionary } from "../dictionaries";

export const metadata: Metadata = {
    title: "Menú",
    openGraph: {
        title: "Menú | D\'Graná Tapas Torremolinos"
    }
}

export default async function Menu({ params: { lang } }: { params: { lang: string } }) {
    const dict: Dict = await getDictionary(lang)
    const base = "/assets/platos"

    return (
        <section className="col-span-full p-0 border-none">
            <h1 className="text-base font-extrabold text-dark">{dict.categories.subtitle}</h1>
            <p className="text-4xl font-black mb-4 text-medium">{dict.categories.title}</p>
            <div className="grid gap-4 lg:grid-cols-3">
                <Category name={dict.categories.ensaladas} slug="menu/ensaladas" img={`${base}/ensalada-bacon-queso-cabra.webp`} />
                <Category name={dict.categories.entrantes} slug="menu/entrantes" img={`${base}/patatas-bravas-caseras.webp`} />
                <Category name={dict.categories.principales} slug="menu/principales" img={`${base}/flamenquin-cordobes-casero.webp`} />
                <Category name={dict.categories.asiaticos} slug="menu/asiaticos" img={`${base}/pan-bao-solomillo-2.webp`} />
                <Category name={dict.categories.pescados} slug="menu/pescados" img={`${base}/cazon-adobo.webp`} />
                <Category name={dict.categories.exigentes} slug="menu/exigentes" img={`${base}/milhojas-queso-cabra-mango-jamon.webp`} />
                <Category name={dict.categories.hamburguesas} slug="menu/hamburguesas" img={`${base}/hamburguesa-angus.webp`} />
                <Category name={dict.categories.postres} slug="menu/postres" img={`${base}/migas-chocolate.webp`} />
                <Category name={dict.categories.bebidas} slug="menu/bebidas" img={`${base}/bebidas-dgrana.webp`} />
            </div>
        </section>
    )
}