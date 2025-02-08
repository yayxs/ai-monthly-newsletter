'use client'

import { Donate } from '@/components/Donate'
import { ToolCard } from '@/components/ToolCard'
import { CATEGORY_ORDER } from '@/constants/categories'
import { useSearch } from '@/contexts/SearchContext'
import { tools } from '@/data/tools'
import { Tool } from '@/types/tool'
import { useMemo } from 'react'

// Fisher-Yates 洗牌算法
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function Home() {
  const { searchTerm } = useSearch()

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(tools.map((tool) => tool.category.key)))
    // 按照预定义顺序排序，未定义顺序的分类放在最后
    return uniqueCategories.sort((a, b) => {
      const indexA = CATEGORY_ORDER.indexOf(a)
      const indexB = CATEGORY_ORDER.indexOf(b)
      if (indexA === -1) return 1
      if (indexB === -1) return -1
      return indexA - indexB
    })
  }, [])

  const filteredTools = useMemo(() => {
    if (!searchTerm) return tools
    return tools.filter((tool) => {
      return (
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.category.name.toLowerCase().includes(searchTerm) ||
        tool.category.key.toLowerCase().includes(searchTerm)
      )
    })
  }, [searchTerm])

  // 按类别分组工具并过滤掉空类别
  const groupedByCategory = useMemo(() => {
    return categories.reduce<Record<string, Tool[]>>((acc, category) => {
      const categoryTools = filteredTools.filter((tool) => tool.category.key === category)
      if (categoryTools.length > 0) {
        acc[category] = categoryTools
      }
      return acc
    }, {})
  }, [categories, filteredTools])

  // 获取有工具的类别列表
  const categoriesWithTools = Object.keys(groupedByCategory)

  return (
    <div className='container mx-auto px-4 sm:px-6'>
      <main className='space-y-6 py-4 sm:py-6'>
        <div id='all'></div>
        {categoriesWithTools.map((category) => (
          <div key={category} id={category.toLowerCase()}>
            <div className='mb-3 flex items-center border-b border-gray-200 pb-2'>
              <h2 className='text-lg font-medium text-gray-900 sm:text-xl'>{category}</h2>
              <span className='ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 sm:ml-3'>
                {groupedByCategory[category].length}
              </span>
            </div>
            <div className='xs:grid-cols-2 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {groupedByCategory[category].map((tool, index) => (
                <ToolCard key={`${category}-${tool.name}-${index}`} tool={tool} />
              ))}
            </div>
          </div>
        ))}
        {categoriesWithTools.length === 0 && (
          <div className='flex items-center justify-center py-8 text-gray-500 sm:py-12'>
            未找到相关结果
          </div>
        )}
      </main>
      <div className='fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6'>
        <Donate />
      </div>
    </div>
  )
}
