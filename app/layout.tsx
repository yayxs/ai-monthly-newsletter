import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from './LanguageProvider'
import { ThemeProvider } from './ThemeProvider'

export const metadata: Metadata = {
  title: 'AI 导航',
  description: 'AI 第一步',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh' suppressHydrationWarning>
      <body className='min-h-screen'>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
