import type { Metadata } from "next"

import SocialSection from "@/components/SocialSection"
import ContactSection from "@/components/ContactSection"
import HomeSection from "@/components/HomeSection"

import { Suspense, lazy } from 'react'

const CarrouselSection = lazy(() => import("@/components/Carousel"))

export const metadata: Metadata = {
  title: 'D\'Graná Tapas Torremolinos',
  description: 'Cocina mediterránea y asiática. Productos frescos y caseros. Tapas y platos en Torremolinos, Málaga.',
}

export default function Home() {
  return (
    <>

      <HomeSection />

      <ContactSection />

      <SocialSection />

      <Suspense fallback={<div>Loading...</div>}>
        <CarrouselSection />
      </Suspense>

      <section className="lg:col-auto">
        <h2>test</h2>
      </section>

      {/* <section className={`${styles.about_section} page_container`}>

        <header className={styles.about_header}>
          <h2 className={styles.black}>Conoce nuestro bar, nuestra historia.</h2>
        </header>

        <div className={styles.columns_container}>

          <div className={styles.about_content}>
            <p className={styles.black}>Somos lalala ven conocenos y prueba nuestras tapas, jajaja que risa. Esto es una mera prueba. No se como quedará.</p>
            <Button value="Ver historia" url="/menu" className={styles.btn} />
          </div>

          <div className={styles.img_content}>
            <div className={styles.img_container}>
              <Image
                alt="localización dgrana tapas torremolinos"
                className={styles.img}
                src={bar}
                fill
              />
            </div>
          </div>

        </div>

      </section>


    </>
    ) */}
    </>
  )
}
