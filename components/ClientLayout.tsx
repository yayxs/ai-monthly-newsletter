'use client'

import { ThemeProvider } from '@/app/ThemeProvider'
import { ReactNode } from 'react'

export function ClientLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
