import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estimador de Costos de Construcción',
  description: 'Calcula los costos de tu proyecto de construcción',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js" async></script>
        <script src="https://files.bpcontent.cloud/2025/06/05/20/20250605205125-BWUT65ZS.js" async></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
