import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../app/components/header'
import Intro from '../app/components/intro'
import ActiveSectionState from '../../context/active-section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdulkadir | Software Engineer',
  description: 'A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
        <ActiveSectionState>
          <Header />
          {children}
        </ActiveSectionState>
      </body>
    </html>
  )
}
