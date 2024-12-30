'use client'

import { useTheme } from '@/hooks/useTheme'
import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme()

  useEffect(() => {
    // 只在暗色模式时添加 dark class
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [currentTheme])

  return children
}