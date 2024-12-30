'use client'

import { useState, useEffect } from 'react'
import { Theme, themeColors } from '@/lib/themes'

// 更新 DOM 中的主题颜色
function updateThemeColors(colors: typeof themeColors['light']) {
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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system'
    }
    return 'system'
  })
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  // 初始化系统主题
  useEffect(() => {
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
    updateThemeColors(themeColors[currentTheme])
    updateHtmlClass(currentTheme)
  }, [currentTheme])

  const setThemeWithSave = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return {
    theme,
    setTheme: setThemeWithSave,
    currentTheme,
    colors: themeColors[currentTheme]
  }
}