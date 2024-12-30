'use client'

import { useState } from 'react'
import { categories } from '../data/categories'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 移动端菜单按钮 */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg glass-effect"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-white" />
        )}
      </button>

      {/* 侧边栏 */}
      <aside className={`
        w-64 glass-effect fixed h-screen transition-transform duration-300 z-40
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white neon-glow">AI 导航</h1>
          </div>
          <ThemeSwitcher />
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button className="w-full text-left px-6 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
