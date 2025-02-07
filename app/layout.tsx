import { ClientLayout } from '@/components/ClientLayout'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 导航',
  description: 'AI 第一步',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh'>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
