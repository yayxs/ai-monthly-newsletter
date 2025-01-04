'use client'

import { LanguageProvider } from '@/app/LanguageProvider'
import { ThemeProvider } from '@/app/ThemeProvider'
import { useEffect, useState } from 'react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 在挂载前显示一个空的加载状态
  if (!mounted) {
    return (
      <html lang='zh' suppressHydrationWarning>
        <body className='min-h-screen bg-white dark:bg-gray-900' />
      </html>
    )
  }

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
