'use client'

import { tools } from '@/data/tools'
import { ToolCategory } from '@/types/tool'

export function Sidebar() {
  const scrollToCategory = (category: string) => {
    const element = document.getElementById(category)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // 从工具列表中提取所有唯一的类别
  const categories = Array.from(new Set(tools.map((tool) => tool.category.key)))

  // 获取类别的中文名称
  const getCategoryName = (category: ToolCategory) => {
    const tool = tools.find((t) => t.category.key === category)
    return tool?.category.name || category
  }

  // 基础菜单项
  const menuItems = [
    // 动态添加类别菜单项
    ...categories.map((category) => ({
      name: category,
      id: category.toLowerCase(),
    })),
  ]

  return (
    <div className='w-64 shrink-0 border-r border-gray-200 bg-white'>
      <div className='flex h-full flex-col py-4'>
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToCategory(item.id)}
            className='mb-2 flex items-center gap-3 px-4 py-2 text-left text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-500'
          >
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
