'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { Language } from '@/lib/i18n'
import { createContext, ReactNode, useContext } from 'react'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  mounted: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const languageState = useLanguage()

  return <LanguageContext.Provider value={languageState}>{children}</LanguageContext.Provider>
}

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider')
  }
  return context
}
