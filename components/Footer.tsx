'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function Footer() {
  const { language } = useLanguageContext()

  return (
    <footer className='mt-auto border-t border-gray-100 bg-white py-8 dark:border-white/10 dark:bg-gray-900'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row'>
        <div className='flex items-center gap-4'>
          <Link
            href='/admin'
            className='flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          >
            <ChartBarIcon className='h-4 w-4' />
            <span>{language === 'zh' ? '数据统计' : 'Analytics'}</span>
          </Link>
          <Link
            href='/contact'
            className='text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
          >
            {language === 'zh' ? '广告合作' : 'Advertising'}
          </Link>
        </div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>
          © {new Date().getFullYear()} AI Navigation.{' '}
          {language === 'zh' ? '保留所有权利' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  )
}
