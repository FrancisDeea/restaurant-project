import { Dispatch } from "react"
import type { Product } from "./Order"

export type Action = | { type: 'ADD', payload: { name: string, quantity: number } } | { type: 'REMOVE', payload: { name: string, quantity: number } } | { type: 'CLEAR', payload: { name: string, quantity: number } }

export default function ItemCart({ product, lang, dispatch }: { product: Product, lang: string, dispatch: Dispatch<Action> }) {
    const { name, quantity } = product

    return (
        <li className="bg-black/40 p-3 rounded-lg flex flex-col gap-2 lg:flex-row">
            <p className="text-xl font-medium lg:w-[70%]">{name}: <span className="font-extrabold">{quantity} {lang === 'es' ? 'uds.' : 'pcs.'}</span></p>
            <div className="flex flex-row gap-2 lg:w-[30%]">
                <button onClick={() => dispatch({ type: 'ADD', payload: product })} className="rounded-md bg-medium text-white px-2 py-1 flex-1 max-w-[120px]">+</button>
                <button onClick={() => dispatch({ type: 'REMOVE', payload: product })} className="rounded-md bg-medium text-white px-2 py-1 flex-1 max-w-[120px]">-</button>
                <button onClick={() => dispatch({ type: 'CLEAR', payload: product })} className="rounded-md bg-medium text-white px-2 py-1 flex-1 max-w-[120px]">{lang === 'es' ? 'Eliminar' : 'Remove'}</button>
            </div>
        </li>
    )
}