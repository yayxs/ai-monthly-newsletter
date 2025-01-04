import { ClientLayout } from '@/components/ClientLayout'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 导航',
  description: 'AI 第一步',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}
