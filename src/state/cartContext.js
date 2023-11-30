'use client'

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
    switch (action.type) {
        case "ADD":
            if (state.find(product => product.name === action.payload.name)) {
                const newState = state.map(product => product.name === action.payload.name ? { ...product, quantity: product.quantity + 1 } : product)
                return newState
            } else {
                return [...state, { name: action.payload.name, quantity: 1 }]
            }
            break
        default:
            return state;
    }
}

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, [])

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

