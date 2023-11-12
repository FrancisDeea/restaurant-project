/* eslint-disable @next/next/no-img-element */
'use client'

import { Carousel } from 'flowbite-react';
import { getGallery } from '@/lib/services';
import { useState, useEffect, Suspense } from 'react';
import Loading from './Loading';

export default function CarrouselSection() {
    const [gallery, setGallery] = useState<string[] | null>(null)

    console.log(gallery)

    useEffect(() => {
        if (!gallery) {
            const images = getGallery()
            setGallery(images)
        }
    }, [gallery])

    return (
        <section className="aspect-square p-0 overflow-hidden flex justify-center items-center lg:col-auto">
            {
                gallery ?
                    <Carousel indicators={false}>
                        {
                            gallery?.sort(() => Math.random() - 1).map((url, index) => {
                                return <img src={url} key={index} alt="Imágenes orientativas del menú" loading="lazy"></img>
                            })
                        }
                    </Carousel>
                    : <Loading />
            }
        </section>
    );
}
