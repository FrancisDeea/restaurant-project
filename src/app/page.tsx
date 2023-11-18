import type { Metadata } from "next"

import SocialSection from "@/components/SocialSection"
import ContactSection from "@/components/ContactSection"
import HomeSection from "@/components/HomeSection"
import CarrouselSection from "@/components/Carousel"
import DinamicTextSection from "@/components/DinamicTextSection"

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

      <CarrouselSection />

      <DinamicTextSection />
    </>
  )
}
