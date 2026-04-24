import type { Metadata } from 'next'
// Using system fonts (Arial) instead of loading Google fonts
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

// Removed next/font usage to rely on pre-installed system fonts

export const metadata: Metadata = {
  title: "Dr Arora's Dental Square | Your Trusted Dental Care in Ambala",
  description: "Dr Arora's Dental Square provides exceptional dental care in Ambala City. Expert dentists Dr. Rachna Arora and Dr. Deepak Arora offer teeth cleaning, whitening, implants, orthodontics, and more. Book your appointment today.",
  keywords: ['dentist Ambala', 'dental care Ambala City', 'teeth cleaning', 'teeth whitening', 'dental implants', 'orthodontics', 'Dr Arora dentist', 'best dentist Ambala'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Dr Arora's Dental Square | Your Trusted Dental Care in Ambala",
    description: "Where every smile begins with trust. Expert dental care by Dr. Rachna Arora and Dr. Deepak Arora in Ambala City.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
