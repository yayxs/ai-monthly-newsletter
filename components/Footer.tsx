'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Footer() {
  const { language } = useLanguageContext()
  const [totalViews, setTotalViews] = useState<number>(0)

  useEffect(() => {
    // 获取总访问量
    fetch('/api/analytics')
      .then((res) => res.json())
      .then((data) => {
        setTotalViews(data.total_views)
      })
      .catch((error) => {
        console.error('Error fetching analytics:', error)
      })
  }, [])

  const formatDate = (date: string) => {
    if (language === 'zh') {
      return new Date(date).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <footer className='mt-auto border-t border-gray-100 bg-white py-6 dark:border-white/10 dark:bg-gray-900'>
      <div className='container mx-auto flex flex-col items-center gap-4 px-4 text-sm text-gray-500 dark:text-gray-400'>
        <div className='flex items-center gap-4'>
          <a
            href='https://github.com/yayxs/ai-is-coming'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-100'
          >
            <svg viewBox='0 0 24 24' className='h-4 w-4' fill='currentColor'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
            <span>GitHub</span>
          </a>
          <Link href='/contact' className='hover:text-gray-900 dark:hover:text-gray-100'>
            {language === 'zh' ? '广告合作' : 'Advertising'}
          </Link>
          <Link href='/admin' className='hover:text-gray-900 dark:hover:text-gray-100'>
            <span>
              {language === 'zh' ? '访问量 ' : 'Views: '}
              {totalViews.toLocaleString()}
            </span>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <span>
            © {new Date().getFullYear()} AI Navigation.{' '}
            {language === 'zh' ? '保留所有权利' : 'All rights reserved.'}
          </span>
          <span>·</span>
          <span>
            {language === 'zh' ? '更新于 ' : 'Updated on '}{' '}
            {formatDate(process.env.BUILD_TIME || new Date().toISOString())}
          </span>
        </div>
      </div>
    </footer>
  )
}
