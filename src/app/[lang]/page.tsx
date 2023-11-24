import { getDictionary } from './dictionaries'
import type { Dict } from '@/dictionaries/types'

import SocialSection from "@/components/SocialSection"
import ContactSection from "@/components/ContactSection"
import HomeSection from "@/components/HomeSection"
import CarrouselSection from "@/components/Carousel"
import DinamicTextSection from "@/components/DinamicTextSection"

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict: Dict = await getDictionary(lang)

  return (
    <>
      <HomeSection dict={dict} />

      <ContactSection dict={dict} />

      <SocialSection lang={lang} />

      <CarrouselSection />

      <DinamicTextSection dict={dict} />
    </>
  )
}
