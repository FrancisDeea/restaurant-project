'use client'

import { Dict } from "@/dictionaries/types";

import { useContext } from "react"
import { CartContext } from "@/state/cartContext"

import ItemCart from '@/components/ItemCart'
import Button from "./button";

export interface Product {
    name: string;
    quantity: number;
}

export default function Order({ dict, lang }: { dict: Dict, lang: string }) {
    const [state, dispatch] = useContext(CartContext)
    const empty = state.length === 0
    console.log(state)

    return (
        <>
            <div>
                <ul className="flex flex-col gap-4">
                    {
                        empty
                            ? (
                                <>
                                    {dict.pedidoSection.description}
                                    <Button value={dict.pedidoSection.menu} url={`/${lang}/menu`} />
                                </>
                            )
                            : state.map((product: Product) => {
                                return (
                                    <ItemCart key={product.name} product={product} dispatch={dispatch} lang={lang} />
                                )
                            })

                    }
                </ul>
            </div>
        </>
    )
}