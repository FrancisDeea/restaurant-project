import FullCardPlate from "@/components/FullCardPlate"
import { getMenuByCategory } from "@/lib/services"
import { urlDasher } from "@/lib/util"

export function generateMetadata({ params }: { params: { category: string, product: string } }) {
    const { category, product: name } = params
    const product = getMenuByCategory(category).find(plate => encodeURIComponent(urlDasher(plate.name_es)) == name)

    return {
        title: product?.name_es,
        description: product?.description_es,
        openGraph: {
            images: product?.img
        }
    }
}

export default function ProductPage({ params }: { params: { category: string, product: string, lang: string } }) {
    const { category, product: name } = params
    const product = getMenuByCategory(category).find(plate => encodeURIComponent(urlDasher(plate.name_es)) == name)

    if (!product) return null

    const { img, alt, price, allergens } = product
    const nameProduct = params.lang === "es" ? product.name_es : product.name_en
    const description = params.lang === "es" ? product.description_es : product.description_en

    return (
        <>
            <FullCardPlate
                name={nameProduct}
                img={img}
                alt={alt}
                price={price}
                description={description}
                allergens={allergens}
            />
        </>
    )
}