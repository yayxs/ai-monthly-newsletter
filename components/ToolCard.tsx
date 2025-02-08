'use client'

import { Tool } from '@/types/tool'
import Link from 'next/link'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getToolStyles = () => {
    return {
      groupHover: 'group-hover:text-cursor',
      dark: 'dark:group-hover:text-cursor-dark',
    }
  }

  const styles = getToolStyles()

  return (
    <Link
      href={tool.linkUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='group transform transition-all duration-200 hover:scale-[1.02]'
    >
      <div className='flex h-[72px] items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-blue-500 hover:shadow-sm'>
        <div className='min-w-0'>
          <h3 className='text-lg font-medium text-gray-900 group-hover:text-blue-500'>
            {tool.name}
          </h3>
        </div>
        <svg
          className='h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-500'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M14 5l7 7m0 0l-7 7m7-7H3'
          />
        </svg>
      </div>
    </Link>
  )
}
