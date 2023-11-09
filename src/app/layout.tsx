import './globals.css'
import { montserrat } from '@/lib/font'
import Header from '@/components/header'
import SideNav from '@/components/sidenav'
import { SidebarContextProvider } from '../state/sidebarContext'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SidebarContextProvider>
          <Header />
          <div className="md:hidden">
            <SideNav />
          </div>
          <main>
            {children}
          </main>
        </SidebarContextProvider>
      </body>
    </html >
  )
}
