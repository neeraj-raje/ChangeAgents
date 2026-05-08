import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Newsreader } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
})

const sohne = localFont({
  src: [
    { path: './fonts/TestSohne-Leicht-BF663d89cd4952e.otf', weight: '300', style: 'normal' },
    { path: './fonts/TestSohne-Buch-BF663d89cd32e6a.otf', weight: '400', style: 'normal' },
    { path: './fonts/TestSohne-Halbfett-BF663d89cd2d67b.otf', weight: '500', style: 'normal' },
    { path: './fonts/TestSohne-Kraftig-BF663d89cd37e26.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-sohne',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Change Agents — Strategic Advisory',
  description:
    'Change Agents advises enterprise technology companies and senior leaders on strategic positioning, competitive architecture, and narrative alignment.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sohne.variable} ${newsreader.variable}`}>
      <body className="font-sohne bg-ground text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
