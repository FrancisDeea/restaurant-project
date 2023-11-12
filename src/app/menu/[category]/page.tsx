import CardPlate from "@/components/CardPlate"
import { getAllMenu, getMenuByCategory } from "@/lib/services"

export function generateStaticParams() {
    const menu = getAllMenu()

    return Object.keys(menu).map(category => ({ category: category }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = params
    const menuByCategory = getMenuByCategory(category)

    return (
        <section className="col-span-full border-none p-0 grid place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                menuByCategory.map(plate => {
                    const { name, price, img, alt } = plate
                    return (
                        <CardPlate
                            key={name}
                            name={name}
                            price={price}
                            img={img}
                            alt={alt}
                        />
                    )
                })
            }
        </section>
    )
}