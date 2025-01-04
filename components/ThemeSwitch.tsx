'use client'

import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeSwitch() {
  const { currentTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-primary
        dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary
        transition-all duration-200"
      aria-label="切换主题"
    >
      {currentTheme === 'dark' ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6" />
      )}
    </button>
  )
}
