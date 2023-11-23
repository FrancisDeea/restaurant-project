
import FullCardPlate from "@/components/FullCardPlate"
import { allPlatesInArray } from "@/lib/util"
import { menu } from "@/lib/data"
import { unstable_noStore as noStore } from "next/cache"

export default async function RandomProduct() {
    noStore()
    const products = await allPlatesInArray(menu)
    const randomIndex = Math.floor(Math.random() * products.length)
    const product = products[randomIndex]
    
    if (!product) return null

    return (
        <>
            <FullCardPlate
                name={product.name}
                img={product.img}
                alt={product.alt}
                price={product.price}
                description={product.description}
                allergens={product.allergens}
            />
        </>
    )
}