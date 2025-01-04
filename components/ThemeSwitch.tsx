'use client'

import { useTheme } from '@/hooks/useTheme'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export function ThemeSwitch() {
  const { currentTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className='flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary' />
    )
  }

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary'
      aria-label='切换主题'
    >
      {currentTheme === 'dark' ? <MoonIcon className='h-5 w-5' /> : <SunIcon className='h-5 w-5' />}
    </button>
  )
}
