'use client'

import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

// 从localStorage获取保存的主题
const getSavedTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  return (localStorage.getItem('theme') as Theme) || 'light'
}

// 应用主题到DOM
const applyTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return

  const root = document.documentElement
  const body = document.body

  // 移除所有主题相关的class
  root.classList.remove('light', 'dark')
  body.classList.remove('light', 'dark')

  // 添加新的主题class
  root.classList.add(theme)
  body.classList.add(theme)

  // 更新html的data-theme属性
  root.setAttribute('data-theme', theme)
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getSavedTheme)
  const [mounted, setMounted] = useState(false)

  // 设置主题
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  // 初始化主题
  useEffect(() => {
    setMounted(true)
    const savedTheme = getSavedTheme()
    setThemeState(savedTheme)
    applyTheme(savedTheme)
  }, [])

  return {
    theme,
    setTheme,
    mounted,
  }
}
