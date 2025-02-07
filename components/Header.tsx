'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ExternalLinksDropdown } from './ExternalLinksDropdown'
import { LLMTimelineDropdown } from './LLMTimelineDropdown'
import { ThemeSwitch } from './ThemeSwitch'

interface HeaderProps {
  onSearch?: (term: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className='sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-gray-900/80'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='text-xl font-bold text-gray-900 dark:text-white'>
            AI Navigation
          </Link>

          {onSearch && (
            <div className='mx-4 hidden flex-1 lg:block'>
              <div className='relative'>
                <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
                <input
                  type='text'
                  placeholder='搜索 AI 工具...'
                  className='w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400'
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className='flex items-center gap-2'>
            <ThemeSwitch />
            <ExternalLinksDropdown />
            <LLMTimelineDropdown />
          </div>
        </div>
      </div>

      {onSearch && (
        <div className='border-t border-gray-100 p-4 lg:hidden dark:border-white/10'>
          <div className='relative'>
            <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='搜索 AI 工具...'
              className='w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400'
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>
      )}
    </header>
  )
}
