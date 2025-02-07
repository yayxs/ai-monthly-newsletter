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
  const [searchTerm, setSearchTerm] = useState('')
  const [showDomesticOnly, setShowDomesticOnly] = useState<boolean | null>(null)
  const [shuffledTools, setShuffledTools] = useState<Tool[]>([])

  useEffect(() => {
    setShuffledTools(shuffleArray(tools))
  }, [])

  const filteredTools = shuffledTools.filter((tool) => {
    const matchesCategory = !selectedCategory || tool.category.key === selectedCategory
    const matchesSearch =
      !searchTerm ||
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDomestic = showDomesticOnly === null || tool.isDomestic === showDomesticOnly

    return matchesCategory && matchesSearch && matchesDomestic
  })

  const sortedTools = [...filteredTools].sort((a, b) => {
    if (!sortBy) return 0

    if (sortBy === 'companyFoundedDate') {
      const dateA = new Date(a.companyInfo?.foundedDate || '').getTime()
      const dateB = new Date(b.companyInfo?.foundedDate || '').getTime()
      return dateB - dateA
    }

    const dateA = new Date(a.releaseDate || '').getTime()
    const dateB = new Date(b.releaseDate || '').getTime()
    return dateB - dateA
  })

  const groupedTools = sortedTools.reduce<Tool[][]>((acc, tool, index) => {
    const groupIndex = Math.floor(index / 6)
    if (!acc[groupIndex]) {
      acc[groupIndex] = []
    }
    acc[groupIndex].push(tool)
    return acc
  }, [])

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <main className='container mx-auto min-h-[calc(100vh-200px)] px-4 py-8'>
        <ToolFilter
          tools={tools}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={(sort) => setSortBy(sort)}
          showDomesticOnly={showDomesticOnly}
          onDomesticChange={setShowDomesticOnly}
        />
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {groupedTools.map((group, groupIndex) => (
            <div key={groupIndex} className='contents'>
              {group.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
