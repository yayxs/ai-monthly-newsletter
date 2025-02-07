'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { ToolCard } from '@/components/ToolCard'
import { tools } from '@/data/tools'
import { Tool } from '@/types/tool'
import { useState } from 'react'

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

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = !searchTerm || tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  // 按类别分组工具
  const groupedByCategory = categories.reduce<Record<string, Tool[]>>((acc, category) => {
    acc[category] = filteredTools.filter((tool) => tool.category.key === category)
    return acc
  }, {})

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <div className='container mx-auto flex min-h-[calc(100vh-200px)] px-4 py-8'>
        <Sidebar />
        <main className='flex-1 pl-8'>
          <div id='all' className='mb-8'></div>
          {categories.map((category) => (
            <div key={category} id={category.toLowerCase()} className='mb-12'>
              <h2 className='mb-6 text-2xl font-bold text-gray-900'>{category}</h2>
              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {groupedByCategory[category].map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  )
}
