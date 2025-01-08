'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ToolCard } from '@/components/ToolCard'
import { ToolFilter } from '@/components/ToolFilter'
import { tools } from '@/data/tools'
import { Tool, ToolCategory } from '@/types/tool'
import { useEffect, useState } from 'react'

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
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | null>(null)
  const [sortBy, setSortBy] = useState<'releaseDate' | 'companyFoundedDate' | null>(null)
  const [showDomesticOnly, setShowDomesticOnly] = useState<boolean | null>(null)
  const [shuffledTools, setShuffledTools] = useState<Tool[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // 初始化时随机排序工具列表
    setShuffledTools(shuffleArray(tools))
    // 记录页面访问
    fetch('/api/analytics?path=/', { method: 'POST' }).catch(console.error)
  }, [])

  const filteredTools = shuffledTools
    .filter((tool) => {
      // 搜索过滤
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase()
        return (
          tool.name.toLowerCase().includes(searchLower) ||
          tool.description.en.toLowerCase().includes(searchLower) ||
          tool.description.zh.toLowerCase().includes(searchLower) ||
          tool.company.toLowerCase().includes(searchLower)
        )
      }
      return true
    })
    .filter((tool) => {
      if (selectedCategory === null) return true
      return tool.category.key === selectedCategory
    })
    .filter((tool) => {
      if (showDomesticOnly === null) return true
      return tool.isDomestic === showDomesticOnly
    })
    .sort((a, b) => {
      if (sortBy === 'releaseDate') {
        return new Date(b.releaseDate || '').getTime() - new Date(a.releaseDate || '').getTime()
      }
      if (sortBy === 'companyFoundedDate') {
        return (
          new Date(b.companyInfo?.foundedDate || '').getTime() -
          new Date(a.companyInfo?.foundedDate || '').getTime()
        )
      }
      return 0 // 如果没有选择排序方式，保持随机顺序
    })

  // 将工具列表分组，每6个一组，用于在工具卡片之间插入广告
  const groupedTools = filteredTools.reduce(
    (acc, tool, index) => {
      const groupIndex = Math.floor(index / 6)
      if (!acc[groupIndex]) {
        acc[groupIndex] = []
      }
      acc[groupIndex].push(tool)
      return acc
    },
    [] as (typeof filteredTools)[]
  )

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <main className='container mx-auto px-4 py-8'>
        <ToolFilter
          tools={tools}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showDomesticOnly={showDomesticOnly}
          onDomesticChange={setShowDomesticOnly}
        />
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {groupedTools.map((group, groupIndex) => (
            <div key={groupIndex} className='contents'>
              {group.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
              {/* 每6个工具后添加一个广告位 */}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
