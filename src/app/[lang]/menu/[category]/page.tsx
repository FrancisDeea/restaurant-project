import CardPlate from "@/components/CardPlate"

import Link from "next/link"
import { getAllMenu, getMenuByCategory } from "@/lib/services"
import { urlDasher } from "@/lib/util"

export function generateStaticParams() {
    const menu = getAllMenu()

    return Object.keys(menu).map(category => ({ category: category }))
}

export function generateMetadata({ params: { category } }: { params: { category: string } }) {
    const formatedTitle = category.charAt(0).toUpperCase() + category.slice(1)
    return {
        title: formatedTitle
    }
}

export default function CategoryPage({ params }: { params: { category: string, lang: string } }) {
    const { category, lang } = params
    const menuByCategory = getMenuByCategory(category)

    return (
        <section className="col-span-full border-none p-0 grid place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                menuByCategory.map(plate => {
                    const { price, img, alt } = plate
                    const name = lang === "es" ? plate.name_es : plate.name_en
                    const slug = urlDasher(plate.name_es)

                    return (
                        <Link href={`${category}/${slug}`} key={name} className="w-full"
                        >
                            <CardPlate
                                name={name}
                                price={price}
                                img={img}
                                alt={alt}
                            />
                        </Link>
                    )
                })
            }
        </section>
    )
}