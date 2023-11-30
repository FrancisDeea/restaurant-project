/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useContext } from 'react'
import { findAllergens } from '@/lib/util'
import { IconSquareX } from '@tabler/icons-react'
import { CartContext } from '@/state/cartContext'

export default function DinamicPlateInfo({ name, allergens }: { name: string, allergens: string[] | null }) {
    const [modal, setModal] = useState(false)
    const [state, dispatch] = useContext(CartContext)

    const productQuantity = state.find((product: { name: string, quantity: number }) => product.name === name)?.quantity ?? 0

    console.log(state)

    const show = modal ? 'animate-jump-in flex justify-center items-center' : 'hidden'

    return (
        <div className="w-full flex flex-row justify-center gap-2">
            <button
                className="rounded-md bg-slate-600 px-2 py-1"
                onClick={() => setModal(!modal)}
            >
                Alérgenos
            </button>

            <button
                className="rounded-md bg-medium text-white px-2 py-1 flex items-center justify-center gap-2"
                onClick={() => dispatch({ type: 'ADD', payload: { name: name } })}
            >
                <p className=''>Añadir +1</p>
            </button>


            <div className='absolute top-0 left-0 right-0 bg-medium h-6 flex items-center justify-center'>
                <p className='text-center text-sm'>Tienes {productQuantity} en tu pedido</p>
            </div>

            <div className={`absolute bg-gray-900/90 inset-0 ${show}`}>
                <IconSquareX onClick={() => setModal(!modal)} className="absolute top-6 right-6" size={38} />
                <ul className="flex flex-col gap-4">
                    {
                        allergens?.map(allergen => {
                            const { src, alt } = findAllergens(allergen)
                            return (
                                <li key={allergen}>
                                    <img
                                        key={allergen}
                                        src={src}
                                        alt={alt}
                                        width={35}
                                        height={35}
                                        className="inline-block mr-2 "
                                    />
                                    {allergen}
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}