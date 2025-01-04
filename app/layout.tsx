import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './ThemeProvider'

export const metadata: Metadata = {
  title: 'AI 导航',
  description: '发现优质的 AI 工具和资源',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
