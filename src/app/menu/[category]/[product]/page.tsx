import FullCardPlate from "@/components/FullCardPlate"
import { getMenuByCategory } from "@/lib/services"
import { urlDasher } from "@/lib/util"

export function generateMetadata({ params }: { params: { category: string, product: string } }) {
    const { category, product: name } = params
    const product = getMenuByCategory(category).find(plate => encodeURIComponent(urlDasher(plate.name)) == name)

    return {
        title: product?.name,
        description: product?.description,
        openGraph: {
            images: product?.img
        }
    }
}

export default function ProductPage({ params }: { params: { category: string, product: string } }) {
    const { category, product: name } = params
    const product = getMenuByCategory(category).find(plate => encodeURIComponent(urlDasher(plate.name)) == name)

    if (!product) return null

    return (
        <FullCardPlate
            name={product.name}
            img={product.img}
            alt={product.alt}
            price={product.price}
            description={product.description}
            allergens={product.allergens}
        />
    )
}