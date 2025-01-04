'use client'

import { useTheme } from '@/hooks/useTheme'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { mounted } = useTheme()

  // 避免SSR水合不匹配
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
