'use client'

import { Tool } from '@/types/tool'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={tool.linkUrl} target='_blank' rel='noopener noreferrer' className='group block'>
      <div className='relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-gray-300 hover:shadow-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex-1'>
            <h3 className='text-sm font-medium text-gray-900 group-hover:text-blue-600'>
              {tool.name}
            </h3>
          </div>
          <ArrowUpRightIcon className='h-4 w-4 text-gray-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600' />
        </div>
      </div>
    </Link>
  )
}
