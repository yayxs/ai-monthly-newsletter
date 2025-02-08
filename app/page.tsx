'use client'

import { ToolCard } from '@/components/ToolCard'
import { tools } from '@/data/tools'
import { Tool } from '@/types/tool'
import debounce from 'lodash/debounce'
import { useCallback, useState } from 'react'

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
  const categories = Array.from(new Set(tools.map((tool) => tool.category.key)))

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
    <div className='container mx-auto px-4 py-8'>
      <main>
        <div id='all' className='mb-8'></div>
        {categoriesWithTools.map((category) => (
          <div key={category} id={category.toLowerCase()} className='mb-12'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>{category}</h2>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {groupedByCategory[category].map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
              {/* 添加占位元素保持网格结构稳定 */}
              {Array.from({ length: 3 - (groupedByCategory[category].length % 3) }).map((_, i) => (
                <div key={`placeholder-${i}`} className='hidden lg:block' />
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
    </div>
  )
}
