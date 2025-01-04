'use client'

import { Theme, themeColors } from '@/lib/themes'
import { useEffect, useState } from 'react'

// 更新 DOM 中的主题颜色
function updateThemeColors(colors: (typeof themeColors)['light']) {
  const root = document.documentElement
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })
}

// 更新 HTML 的 class
function updateHtmlClass(theme: 'light' | 'dark') {
  const html = document.documentElement
  html.classList.remove('light', 'dark')
  html.classList.add(theme)
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light')
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // 初始化系统主题和保存的主题
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const initialTheme = mediaQuery.matches ? 'dark' : 'light'
    setSystemTheme(initialTheme)

    const handler = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light'
      setSystemTheme(newTheme)
      if (theme === 'system') {
        updateThemeColors(themeColors[newTheme])
        updateHtmlClass(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [theme])

  const currentTheme = theme === 'system' ? systemTheme : theme

  // 当主题变化时更新 DOM
  useEffect(() => {
    if (mounted) {
      updateThemeColors(themeColors[currentTheme])
      updateHtmlClass(currentTheme)
    }
  }, [currentTheme, mounted])

  const setThemeWithSave = (newTheme: Theme) => {
    setTheme(newTheme)
    if (mounted) {
      localStorage.setItem('theme', newTheme)
    }
  }

  return {
    theme,
    setTheme: setThemeWithSave,
    currentTheme,
    colors: themeColors[currentTheme],
  }
}
