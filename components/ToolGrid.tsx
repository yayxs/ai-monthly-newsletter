'use client'

import { tools } from '@/data/tools'
import { useEffect, useState } from 'react'
import { ToolCard } from './ToolCard'

// Fisher-Yates 洗牌算法
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function ToolGrid() {
  const [shuffledTools, setShuffledTools] = useState(tools)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setShuffledTools(shuffleArray(tools))
  }, [])

  const filteredTools = shuffledTools.filter((tool) => {
    const query = searchQuery.toLowerCase()
    return tool.name.toLowerCase().includes(query)
  })

  return (
    <div className='space-y-4'>
      <input
        type='text'
        placeholder='Search tools...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}
