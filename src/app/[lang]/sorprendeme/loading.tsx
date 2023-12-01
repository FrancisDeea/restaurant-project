'use client'

import { Spinner } from 'flowbite-react';

export default function Loading() {
    return (
        <div className='w-full max-w-[396px] h-[calc(100vh-96px)] rounded-[40px] bg-slate-900 flex justify-center items-center'>
            <Spinner size="xl" aria-label="Cargando contenido, por favor espere." />
        </div>
    )
}