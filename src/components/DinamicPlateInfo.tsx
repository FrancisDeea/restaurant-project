/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'

import { findAllergens, translateAllergen } from '@/lib/util'
import { IconSquareX } from '@tabler/icons-react'
import { CartContext } from '@/state/cartContext'

export default function DinamicPlateInfo({ name, allergens, lang }: { name: string, allergens: string[] | null, lang: string }) {
    const [modal, setModal] = useState(false)
    const [state, dispatch] = useContext(CartContext)

    const productQuantity = state.find((product: { name: string, quantity: number }) => product.name === name)?.quantity ?? 0

    const show = modal ? 'animate-fade animate-duration-200 flex justify-center items-center' : 'hidden'
    const info = lang === 'en' ? `You have ${productQuantity} in your order` : `Tienes ${productQuantity} en tu pedido`

    useEffect(() => {
        setModal(false)
    }, [name])

    return (
        <div className="w-full flex flex-row justify-center gap-2">
            <button
                className="rounded-md bg-slate-600 px-2 py-1"
                onClick={() => setModal(!modal)}
            >
                {lang === "en" ? "Allergens" : "Alérgenos"}
            </button>

            <button
                className="rounded-md bg-medium text-white px-2 py-1 flex items-center justify-center gap-2"
                onClick={() => dispatch({ type: 'ADD', payload: { name: name } })}
            >
                <p className=''>{lang === "en" ? "Add" : "Añadir"} +1</p>
            </button>


            <div className='absolute top-[390px] left-0 right-0 bg-medium h-8 flex items-center justify-center'>
                <Link href={`/${lang}/pedido`}><p className='text-center text-sm underline'>{info}</p></Link>
            </div>

            <div className={`absolute bg-gray-900/90 inset-0 ${show} z-50`} onClick={() => setModal(false)}>
                <IconSquareX onClick={() => setModal(!modal)} className="absolute top-10 right-10" size={38} />
                <ul className="flex flex-col gap-4">
                    {
                        allergens?.map(allergen => {
                            const { src, alt } = findAllergens(allergen)
                            const name = lang === 'en' ? translateAllergen(allergen) : allergen[0].toUpperCase() + allergen.split("").slice(1).join("")
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
                                    {name}
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}