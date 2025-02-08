'use client'

import { useSearch } from '@/contexts/SearchContext'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import debounce from 'lodash/debounce'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

export function Header() {
  const pathname = usePathname()
  const { setSearchTerm } = useSearch()
  const showSearch = pathname === '/'

  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value.toLowerCase().trim())
    }, 300),
    [setSearchTerm]
  )

  return (
    <header className='sticky top-0 z-50 border-b border-gray-200 bg-white'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex flex-1 items-center gap-4 sm:gap-8'>
            <Link href='/' className='text-base font-medium text-gray-900 sm:text-lg'>
              AI Navigation
            </Link>

            {showSearch && (
              <div className='hidden flex-1 lg:block'>
                <div className='relative max-w-md'>
                  <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400' />
                  <input
                    type='text'
                    placeholder='搜索工具...'
                    className='w-full rounded-full bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200'
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          <div className='flex items-center gap-2 sm:gap-4'>
            <Link
              href='https://aicoding.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='group hidden items-center gap-1 text-sm text-gray-600 hover:text-gray-900 sm:flex'
            >
              <span>AI Coding</span>
              <ArrowTopRightOnSquareIcon className='h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-900' />
            </Link>
            <Link
              href='https://github.com/yayxs/ai-navigation'
              target='_blank'
              rel='noopener noreferrer'
              className='group flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900'
            >
              <span className='hidden sm:inline'>GitHub</span>
              <ArrowTopRightOnSquareIcon className='h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-900' />
            </Link>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className='border-t border-gray-100 p-4 lg:hidden'>
          <div className='relative'>
            <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='搜索工具...'
              className='w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      )}
    </header>
  )
}
