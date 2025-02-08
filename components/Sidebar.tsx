'use client'

import { CATEGORY_ORDER } from '@/constants/categories'
import { tools } from '@/data/tools'
import { ToolCategory } from '@/types/tool'
import { HashtagIcon } from '@heroicons/react/24/outline'
import { useMemo } from 'react'

export function Sidebar() {
  const scrollToCategory = (category: string) => {
    const element = document.getElementById(category)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // 使用与主页面相同的排序逻辑
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(tools.map((tool) => tool.category.key)))
    return uniqueCategories.sort((a, b) => {
      const indexA = CATEGORY_ORDER.indexOf(a)
      const indexB = CATEGORY_ORDER.indexOf(b)
      if (indexA === -1) return 1
      if (indexB === -1) return -1
      return indexA - indexB
    })
  }, [])

  const getCategoryName = (category: ToolCategory) => {
    const tool = tools.find((t) => t.category.key === category)
    return tool?.category.name || category
  }

  const menuItems = categories.map((category) => ({
    name: category,
    id: category.toLowerCase(),
    key: category,
  }))

  return (
    <aside className='sidebar-scrollbar fixed top-16 h-[calc(100vh-64px)] w-64 overflow-y-auto border-r border-gray-200 bg-white'>
      <nav className='flex flex-col p-4'>
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => scrollToCategory(item.id)}
            className='group flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900'
          >
            <HashtagIcon className='h-4 w-4 text-gray-400 group-hover:text-gray-900' />
            <span className='truncate'>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
