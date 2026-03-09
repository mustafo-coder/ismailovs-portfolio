import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const Montreal = localFont({
  variable: '--font-montreal',
  src: [
    {
      path: '../fonts/Montreal/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Montreal/light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Montreal/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Montreal/medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
})
const SFPro = localFont({
  variable: '--font-sfpro',
  src: [
    {
      path: '../fonts/SFPro/bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/SFPro/medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/SFPro/regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SFPro/semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/SFPro/light.otf',
      weight: '200',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Ismoilov Islam',
  description: "Hi, I'm Ismoilov Islam. I'm a UI/UX Designer. Let's create something amazing!",
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${SFPro.variable} ${Montreal.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
