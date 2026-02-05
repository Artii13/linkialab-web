import type { Metadata, Viewport } from 'next'
import { plusJakarta, instrumentSerif } from '@/styles/fonts'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Preloader } from '@/components/shared/Preloader'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat'
import { CookieBanner } from '@/components/shared/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Link IA Lab | Automatización Inteligente para tu Negocio',
    template: '%s | Link IA Lab',
  },
  description:
    'Transformamos tu negocio con chatbots de IA, automatizaciones inteligentes y asistentes virtuales. Tu negocio funcionando 24/7.',
  keywords: [
    'automatización',
    'inteligencia artificial',
    'chatbot WhatsApp',
    'n8n',
    'automatización empresas',
    'asistente virtual',
    'Link IA Lab',
  ],
  authors: [{ name: 'Link IA Lab', url: 'https://linkialab.com' }],
  creator: 'Link IA Lab',
  publisher: 'Link IA Lab',
  metadataBase: new URL('https://linkialab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Link IA Lab | Automatización Inteligente para Negocios',
    description: 'Diseñamos sistemas con IA que captan clientes, agendan citas y dan seguimiento 24/7.',
    url: 'https://linkialab.com',
    siteName: 'Link IA Lab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Link IA Lab - Automatización con IA',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Link IA Lab | Automatización Inteligente para Negocios',
    description: 'Diseñamos sistemas con IA que captan clientes, agendan citas y dan seguimiento 24/7.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Link IA Lab',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF9' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0A09' },
    { color: '#6366f1' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <Preloader />
          <Header />
          <WhatsAppFloat />
          {children}
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
