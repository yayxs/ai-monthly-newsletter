'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { useViews } from '@/hooks/useViews'
import Link from 'next/link'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwitch'

export function Header() {
  const { language } = useLanguageContext()
  const { views, loading } = useViews()

  return (
    <header className='sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-gray-900/80'>
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>
        <Link
          href='/'
          className='flex items-center gap-1 text-lg font-bold text-gray-900 dark:text-gray-100'
        >
          <span className='text-primary dark:text-primary'>AI</span>
          <span className='bg-primary h-1.5 w-1.5 animate-pulse rounded-full' />
        </Link>
        <div className='flex items-center gap-4'>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            {loading ? (
              <span>{language === 'zh' ? '加载中...' : 'Loading...'}</span>
            ) : (
              <span>
                {language === 'zh' ? '访问量：' : 'Views: '}
                {(views || 0).toLocaleString()}
              </span>
            )}
          </div>
          <div className='flex items-center gap-2'>
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}
