import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav/Nav'
import Logo from '@/components/Logo/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Darkysadow Shop',
  description: 'In project used stack: Next.js, Shopify Storefront API, Tailwind CSS, etc.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "flex flex-col min-h-screen"}>
        <header>
          <div className="container mx-auto flex flex-row justify-between py-4 items-center">
            <Logo />
            <Nav />
          </div>
        </header>
        <main className='flex flex-col justify-center'>
          {children}
        </main>
        <footer className='mt-auto py-5 bg-gray-950'>
          <div className="container mx-auto flex flex-row justify-between items-center">
            <Nav />
            <Logo />
          </div>
        </footer>
      </body>
    </html>
  )
}
