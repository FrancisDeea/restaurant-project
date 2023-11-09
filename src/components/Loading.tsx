import { Spinner } from 'flowbite-react';

export default function Loading() {

    return (
        <div className='w-full h-full bg-slate-500 flex justify-center items-center'>
            <Spinner size="xl" aria-label="Cargando contenido, por favor espere." />
        </div>
    )
}