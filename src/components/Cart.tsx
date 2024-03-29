'use client'

import { CartIcon } from "@/lib/icons";
import { CartContext } from "@/state/cartContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Cart({ lang }: { lang: string }) {
    const router = useRouter()
    const [state, _] = useContext(CartContext)
    const total: number = state.reduce((sum: number, item: { quantity: number; }) => sum + item.quantity, 0)

    useEffect(() => {
        router.prefetch(`/${lang}/pedido`)
    }, [router, lang])

    return (
        <button
            onClick={() => router.push(`/${lang}/pedido`)}
            className="flex flex-row gap-2 items-center justify-center cursor-pointer bg-purple-700 px-2 py-1 rounded-md"
        >
            <span className="">{total}</span>
            <CartIcon />
        </button>
    )
}