'use client'

import { useContext } from "react"
import { CartContext } from "@/state/cartContext"
import ItemCart from '@/components/ItemCart'

export interface Product {
    name: string;
    quantity: number;
}

export default function Pedido() {
    const [state, dispatch] = useContext(CartContext)
    const empty = state.length === 0
    console.log(state)

    return (
        <section className="col-span-full bg-black/50 min-h-[calc(100vh-196px)] lg:min-h-[calc(100vh-148px)]">
            <h1 className="mb-4">Mi Pedido</h1>
            <div>
                <ul className="flex flex-col gap-4">
                    {
                        empty
                            ? "No hay ningún producto en tu pedido. ¡Añade alguno!"
                            : state.map((product: Product) => {
                                return (
                                    <ItemCart key={product.name} product={product} dispatch={dispatch} />
                                )
                            })

                    }
                </ul>
            </div>
        </section>
    )
}