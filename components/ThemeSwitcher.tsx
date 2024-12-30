'use client'

import { useState, useRef, useEffect } from 'react'
import { themes, Theme } from '@/lib/themes'
import { useTheme } from '@/hooks/useTheme'
import { ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, currentTheme } = useTheme()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const icons = {
    system: ComputerDesktopIcon,
    light: SunIcon,
    dark: MoonIcon,
  } as const

  const CurrentIcon = icons[theme]

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors"
        title={`当前主题：${themes.find(t => t.id === theme)?.name}`}
      >
        <CurrentIcon className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg glass-effect">
          <div className="py-2">
            {themes.map(({ id, name }) => {
              const Icon = icons[id as Theme]
              return (
                <button
                  key={id}
                  onClick={() => {
                    setTheme(id as Theme)
                    setIsOpen(false)
                  }}
                  className={`w-full px-4 py-2 flex items-center gap-2 hover:bg-white/20 transition-colors
                    ${theme === id ? 'text-primary' : 'text-gray-300'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                  {theme === id && <span className="ml-auto text-xs">✓</span>}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
