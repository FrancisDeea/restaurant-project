'use client'

import RandomFullCardPlate from "@/components/RandomFullCardPlate"
import { allPlatesInArray, getRandomIndex } from "@/lib/util"
import { menu } from "@/lib/data"
import { useRouter } from "next/navigation"
import { useEffect, useState, useCallback } from "react"
import { unstable_noStore as noStore } from "next/cache"
import Loading from "./loading"

export default function RandomProduct({ params: { lang } }: { params: { lang: string } }) {
    const allProducts = allPlatesInArray(menu)
    const [index, setIndex] = useState<number | null>(null)

    const handleIndex = useCallback(() => {
        const randomIndex = getRandomIndex(allProducts.length)
        setIndex(randomIndex)
    }, [allProducts.length])

    useEffect(() => {
        if (!index) {
            handleIndex()
        }
    }, [index, handleIndex])

    if (!index) return null

    const product = allProducts[index]
    const name = lang === 'es' ? product.name_es : product.name_en
    const description = lang === 'es' ? product.description_es : product.description_en

    return (
        <>
            <RandomFullCardPlate
                name={name}
                img={product.img}
                alt={product.alt}
                price={product.price}
                description={description}
                allergens={product.allergens}
                handleIndex={handleIndex}
            />
        </>
    )
}