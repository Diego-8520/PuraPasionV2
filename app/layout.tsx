import type { Metadata } from 'next'
import { Bebas_Neue, Barlow_Condensed } from 'next/font/google'
import Header from '@/components/catalog/Header'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'Pura Pasión Fútbol Store | Cali, Colombia',
  description: 'La camiseta que sientes, al precio que mereces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${barlowCondensed.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}