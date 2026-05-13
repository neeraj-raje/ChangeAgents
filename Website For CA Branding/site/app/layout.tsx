import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

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
  metadataBase: new URL('https://changeagents.in'),
  title: 'Change Agents — Strategic Advisory',
  description:
    'Change Agents advises enterprise technology firms and senior leaders on strategic positioning, competitive architecture, and narrative alignment. India & APAC.',
  openGraph: {
    type: 'website',
    siteName: 'Change Agents',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
  },
  twitter: { card: 'summary' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sohne.variable}`}>
      <body className="font-sohne bg-ground text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YL37VHYDPT"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YL37VHYDPT');
        `}</Script>
      </body>
    </html>
  )
}
