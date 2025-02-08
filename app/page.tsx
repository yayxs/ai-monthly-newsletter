'use client'

import { Donate } from '@/components/Donate'
import { ToolCard } from '@/components/ToolCard'
import { CATEGORY_ORDER } from '@/constants/categories'
import { tools } from '@/data/tools'
import { Tool } from '@/types/tool'
import debounce from 'lodash/debounce'
import { useCallback, useMemo, useState } from 'react'

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
  const [searchTerm, setSearchTerm] = useState('')
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

  // 使用防抖处理搜索
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value)
    }, 300),
    []
  )

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = !searchTerm || tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  // 按类别分组工具并过滤掉空类别
  const groupedByCategory = categories.reduce<Record<string, Tool[]>>((acc, category) => {
    const categoryTools = filteredTools.filter((tool) => tool.category.key === category)
    if (categoryTools.length > 0) {
      acc[category] = categoryTools
    }
    return acc
  }, {})

  // 获取有工具的类别列表
  const categoriesWithTools = Object.keys(groupedByCategory)

  return (
    <div className='container mx-auto px-6'>
      <main className='space-y-6'>
        <div id='all'></div>
        {categoriesWithTools.map((category) => (
          <div key={category} id={category.toLowerCase()}>
            <div className='mb-3 flex items-center border-b border-gray-200 pb-2'>
              <h2 className='text-xl font-medium text-gray-900'>{category}</h2>
              <span className='ml-3 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600'>
                {groupedByCategory[category].length}
              </span>
            </div>
            <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {groupedByCategory[category].map((tool, index) => (
                <ToolCard key={`${category}-${tool.name}-${index}`} tool={tool} />
              ))}
            </div>
          </div>
        ))}
        {categoriesWithTools.length === 0 && (
          <div className='flex items-center justify-center py-12 text-gray-500'>
            No results found
          </div>
        )}
      </main>
      <div className='fixed bottom-6 right-6 z-50'>
        <Donate />
      </div>
    </div>
  )
}
