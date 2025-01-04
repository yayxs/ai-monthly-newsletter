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

  useEffect(() => {
    setShuffledTools(shuffleArray(tools))
  }, [])

  return (
    <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      {shuffledTools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  )
}
