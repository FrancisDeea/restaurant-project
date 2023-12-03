'use client'

import { saveSessionStorage } from "@/lib/util";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useReducer } from "react";
import { createContext } from "react";

// export interface Product {
//     name: string;
//     quantity: number;
// }

// export type newProduct = Omit<Product, "quantity">

// export type State = Array<Product>

// export type Action =
//     | { type: 'ADD', payload: newProduct }

export const cartReducer = (state, action) => {
    const checkProduct = state.find(product => product.name === action.payload.name)

    switch (action.type) {
        case "SET_SESSION":
            return action.payload
        case "ADD":
            if (checkProduct) {
                const newState = state.map(product => product.name === checkProduct.name ? { ...product, quantity: product.quantity + 1 } : product)
                saveSessionStorage(newState)
                return newState
            } else {
                const newState = [...state, { name: action.payload.name, quantity: 1 }]
                saveSessionStorage(newState)
                return newState
            }
            break
        case "REMOVE":
            if (checkProduct) {
                if (checkProduct.quantity > 1) {
                    const newState = state.map(product => product.name === checkProduct.name ? { ...product, quantity: product.quantity - 1 } : product)
                    saveSessionStorage(newState)
                    return newState
                }
                if (checkProduct.quantity === 1) {
                    const newState = state.filter(product => product.name !== checkProduct.name)
                    saveSessionStorage(newState)
                    return newState
                }
            }
            break
        case "CLEAR":
            if (checkProduct) {
                const newState = state.filter(product => product.name !== checkProduct.name)
                saveSessionStorage(newState)
                return newState
            }
            break

        default:
            return state;
    }
}

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, [])
    useSessionStorage(dispatch)

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

