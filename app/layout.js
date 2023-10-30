import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job To Do list',
  description: 'Everyday list of the jobs applied',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  )
}
