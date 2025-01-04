'use client'

import { useTheme } from '@/hooks/useTheme'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function ThemeSwitch() {
  const { theme, setTheme, mounted } = useTheme()

  // 避免SSR水合不匹配
  if (!mounted) {
    return (
      <button
        className='rounded-full p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary'
        aria-label='加载中'
      >
        <SunIcon className='h-6 w-6' />
      </button>
    )
  }

  const themeNames = {
    light: '浅色模式',
    dark: '深色模式',
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='rounded-full p-2 text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-primary dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary'
      title={`切换到${theme === 'dark' ? '浅色' : '深色'}模式`}
      aria-label='切换主题'
    >
      {theme === 'dark' ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
    </button>
  )
}
