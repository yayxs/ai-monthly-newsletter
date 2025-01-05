'use client'

import { useLanguageContext } from '@/app/LanguageProvider'
import { useEffect, useState } from 'react'

interface AdvertisementProps {
  position: 'card' | 'footer' | 'sidebar'
  className?: string
}

export function Advertisement({ position, className = '' }: AdvertisementProps) {
  const { language } = useLanguageContext()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // 这里可以添加广告初始化代码
    // 例如 Google AdSense 或其他广告平台的代码
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 ${className}`}
    >
      <div className='text-xs text-gray-500 dark:text-gray-400'>
        {language === 'zh' ? '广告' : 'Advertisement'}
      </div>
      {/* 广告内容将在这里展示 */}
      <div className='mt-2 h-[200px] animate-pulse rounded bg-gray-100 dark:bg-gray-700'>
        <div className='flex h-full items-center justify-center text-sm text-gray-400 dark:text-gray-500'>
          {language === 'zh' ? '广告位招租' : 'Ad Space Available'}
        </div>
      </div>
    </div>
  )
}
