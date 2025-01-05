'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Donate } from './Donate'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeSwitch } from './ThemeSwitch'

export function Header() {
  const { language } = useLanguageContext()

  return (
    <header className='sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-gray-900/80'>
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>
        <div className='flex items-center gap-4'>
          <Link
            href='/'
            className='flex items-center gap-1 text-lg font-bold text-gray-900 dark:text-gray-100'
          >
            <span className='text-primary dark:text-primary'>AI</span>
            <span className='bg-primary h-1.5 w-1.5 animate-pulse rounded-full' />
          </Link>
          <div className='flex items-center gap-2'>
            <Donate />
            <Link
              href='https://afdian.com/a/fehoneyguide'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-sm text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300'
            >
              <HeartIcon className='h-4 w-4' />
              <span>{language === 'zh' ? '爱发电' : 'Afdian'}</span>
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
