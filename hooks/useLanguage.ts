'use client'

import { Language } from '@/lib/i18n'
import { useEffect, useState } from 'react'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('zh')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const setLanguageWithSave = (newLanguage: Language) => {
    setLanguage(newLanguage)
    if (mounted) {
      localStorage.setItem('language', newLanguage)
    }
  }

  return {
    language,
    setLanguage: setLanguageWithSave,
  }
}
