import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import SidebarPage from '@/components/Sidebar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone 2.0',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SidebarPage>
        {children}
        </SidebarPage>
        </body>
    </html>
  )
}
