import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Layout/navbar'
import { ThemeProvider } from "@/components/theme-provider"



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jose Victor',
  description: 'Portfólio de José Victor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='scroll-smooth= dark bg-zinc-950 dark:bg-zinc-950'>

      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        <div className='container max-w-screen-xl mx-auto '>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
