'use client'

import Link from 'next/link'

export function Logo() {
  return (
    <Link
      href='/'
      className='hover:text-primary dark:hover:text-primary fixed left-4 top-4 z-50 flex items-center gap-1 rounded-full bg-white/80 px-4 py-2 text-lg font-bold text-gray-900 backdrop-blur-sm transition-all duration-200 dark:bg-gray-900/80 dark:text-gray-100'
    >
      <span className='text-primary dark:text-primary'>AI</span>
      <span className='bg-primary h-1.5 w-1.5 animate-pulse rounded-full' />
    </Link>
  )
}
