'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { translations } from '@/lib/i18n'

export function LanguageSwitch() {
  const { language, setLanguage, mounted } = useLanguageContext()

  // 避免SSR水合不匹配
  if (!mounted) {
    return (
      <button
        className='flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-cursor dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-cursor-dark'
        aria-label='加载中'
      >
        ZH
      </button>
    )
  }

  return (
    <button
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className='flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-cursor dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-cursor-dark'
      aria-label={translations[language].switchLanguage}
      title={translations[language].switchLanguage}
    >
      {language.toUpperCase()}
    </button>
  )
}
