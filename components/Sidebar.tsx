'use client'

import { tools } from '@/data/tools'
import { ToolCategory } from '@/types/tool'
import { HashtagIcon } from '@heroicons/react/24/outline'

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

  const categories = Array.from(new Set(tools.map((tool) => tool.category.key)))

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
    <aside className='fixed top-[88px] h-[calc(100vh-88px)] w-64 overflow-y-auto border-r border-gray-200 bg-white'>
      <nav className='flex flex-col space-y-1 p-4'>
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => scrollToCategory(item.id)}
            className='group flex items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100'
          >
            <HashtagIcon className='h-4 w-4 opacity-75' />
            <span className='truncate'>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
