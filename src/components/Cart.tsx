'use client'

import { CartIcon } from "@/lib/icons";
import { CartContext } from "@/state/cartContext";
import { useContext } from "react";

export default function Cart() {
    const [state, _] = useContext(CartContext)
    const total: number = state.reduce((sum: number, item: { quantity: number; }) => sum + item.quantity, 0)


    return (
        <button className="flex flex-row gap-2 items-center justify-center cursor-pointer bg-purple-700 px-2 py-1 rounded-md">
            <span className="">{total}</span>
            <CartIcon />
        </button>
    )
}