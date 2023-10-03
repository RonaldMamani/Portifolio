import './globals.css'
import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'

const font = Poppins({ subsets: ['latin'], weight: ['300','400','500','700','900'] })

export const metadata: Metadata = {
  title: 'Ronaldo Mamani | Portifolio',
  description: 'Meu portifolio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  )
}
