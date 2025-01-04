'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { ToolCard } from '@/components/ToolCard'
import { ToolFilter } from '@/components/ToolFilter'
import { tools } from '@/data/tools'
import { ToolCategory } from '@/types/tool'
import { useState } from 'react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | null>(null)
  const [sortBy, setSortBy] = useState<'releaseDate' | 'companyFoundedDate' | null>(null)
  const [showDomesticOnly, setShowDomesticOnly] = useState<boolean | null>(null)

  const filteredTools = tools
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
      return 0
    })

  return (
    <>
      <Logo />
      <Header />
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
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
