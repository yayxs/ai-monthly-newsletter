'use client'

import { Language } from '@/lib/i18n'
import { useEffect, useState } from 'react'

// 获取初始语言
const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'zh'
  return (localStorage.getItem('language') as Language) || 'zh'
}

export function useLanguage() {
  // 确保服务器端和客户端初始值一致
  const [language, setLanguageState] = useState<Language>('zh')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
    setMounted(true)
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (mounted) {
      localStorage.setItem('language', newLanguage)
      // 更新 html 的 lang 属性
      document.documentElement.lang = newLanguage
    }
  }

  return {
    language,
    setLanguage,
    mounted,
  }
}
