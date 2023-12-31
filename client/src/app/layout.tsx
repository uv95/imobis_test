import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './Providers'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'Imobis test',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <Providers>
                <body className={inter.className}>{children}</body>
            </Providers>
        </html>
    )
}
