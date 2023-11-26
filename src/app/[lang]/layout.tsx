import '../globals.css'
import type { Metadata } from 'next'
import { montserrat } from '@/lib/font'

import Header from '@/components/header'
import SideNav from '@/components/sidenav'
import Footer from '@/components/Footer'

import { SidebarContextProvider } from '../../state/sidebarContext'

import { getDictionary } from './dictionaries'
import { Dict } from '@/dictionaries/types'

export const metadata: Metadata = {
  title: {
    template: '%s | D\'Graná Tapas Torremolinos',
    default: 'D\'Graná Tapas Torremolinos'
  },
  description: 'Cocina mediterránea y asiática. Productos frescos y caseros. Tapas y platos en Torremolinos, Málaga.',
  keywords: ['Restaurante', 'Bar', 'Tapas', 'Torremolinos'],
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    images: "/assets/openGraph-logo.png"
  }
}

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  const dict: Dict = await getDictionary(params.lang)

  return (
    <html lang={`${params.lang}`}>
      <body className={montserrat.className}>
        <SidebarContextProvider>
          <Header dict={dict} lang={params.lang} />
          <div className="flex justify-center items-center lg:hidden">
            <SideNav dict={dict} lang={params.lang} />
          </div>
          <main>
            {children}
          </main>
          <Footer />
        </SidebarContextProvider>
      </body>
    </html >
  )
}
